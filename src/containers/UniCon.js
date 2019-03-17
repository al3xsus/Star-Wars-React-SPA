import React, {Component} from "react";

import UniCom from '../components/UniCom'
import {UniMod} from "../components/UniMod";
import {ErrorForm, LoadingForm} from '../components/HelperForms';
import {defaultFilterField} from "../components/AuxFns";

class UniCon extends Component {

    defaultState = {
        entity: null,
        data: [],
        pagination: {
            page: 1,
            total: null
        },
        search: '',
        filterField: '',
        filterValue: '',
        isLoading: false,
        error: null,
        modalOpen: false,
        modalData: null
    };

    constructor(props) {
        super(props);
        this.state = {
            ...this.defaultState,
            entity: this.props.entity,
            filterField: defaultFilterField(this.props.entity),
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        this.setState({isLoading: true});
        try {
            const {entity, pagination, search} = this.state;
            let base_url = `https://swapi.co/api/${entity}/?page=${pagination.page}`;
            if (search.length > 0) base_url = `https://swapi.co/api/${entity}/?search=${search}`;
            let response = await fetch(base_url);
            let data = await response.text();
            data = JSON.parse(data);
            const newState = { ...this.state };
            newState.entity = entity;
            newState.data = data.results;
            if (newState.pagination.total === null || (newState.pagination.total === 1 && data.count > 10)) newState.pagination.total = Math.ceil(data.count/10);
            if (data.count < 10) newState.pagination = { page: 1, total: 1 };
            newState.isLoading = false;
            this.setState(newState);
        } catch(error) {
            console.error(error);
            this.setState({ isLoading: false, error })
        }
    };

    handlePaginationChange = (page) => {
        this.setState({isLoading: true});
        const newState = { ...this.state };
        newState.pagination.page = page;
        newState.filterValue = '';
        newState.search = '';
        this.setState({...newState}, () => this.loadData());
    };

    handleSearch = (search) => {
        this.setState({isLoading: true});
        const newState = { ...this.state };
        newState.search = search;
        this.setState({ ...newState}, () => this.loadData());
    };

    handleFilter = (field, value) => {
        if (value.length === 0) {
            this.setState({isLoading: true});
            const newState = {...this.state};
            newState.filterField = field;
            newState.filterValue = '';
            this.setState({...newState}, () => this.loadData());
        } else {
            let [filterField, operator] = field.split(' ');
            const newState = {...this.state};
            let newData = [];
            switch (operator) {
                case 'equal':
                    newData = newState.data.filter(x => Number(x[filterField]) === Number(value));
                    break;
                case 'less':
                    newData = newState.data.filter(x => Number(x[filterField]) < Number(value));
                    break;
                case 'more':
                    newData = newState.data.filter(x => Number(x[filterField]) > Number(value));
                    break;
                default:
                    newData = newState.data.filter(x => x[filterField] === value);
            }
            newState.data = newData;
            newState.filterField = field;
            newState.filterValue = value;
            this.setState(newState)
        }
    };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false, modalData: null });

    handleListObjectClick = (data) => {
        this.setState({isLoading: true});
        const newState = { ...this.state };
        newState.modalData = data;
        this.setState({...newState}, () => this.handleOpen());
    };

    loadAllData = async () => {
        this.setState({isLoading: true});
        const newState = {...this.state};
        let items = [];

        for (let [key, value] of Object.entries(newState.modalData)) {
            if (Array.isArray(value) && value.length > 0) {
                items.push(...value)
            } else if (key === 'homeworld') items.push(value)
        }

        const fetchAll = (urls) => {
            return Promise.all(
                urls.map(url => fetch(url)
                    .then(r => r.text())
                    .then(data => JSON.parse(data))
                    .then(data => ({data, url}))
                    .catch(error => ({error, url}))
                )
            )
        };

        let responses = await fetchAll(items);
        let index = null;
        if (newState.modalData.title) index = newState.data.findIndex(x => x.title === newState.modalData.title);
        else index = newState.data.findIndex(x => x.name === newState.modalData.name);
        let newData = newState.data[index];
        let buff_index = null;
        let newValue = [];

        for (let [key, value] of Object.entries(newData)) {
            if (Array.isArray(value)) {
                if (value.length > 0) {
                    value.forEach(val => {
                        buff_index = responses.findIndex(x => x.url === val);
                        // newValue.push(responses[buff_index].data)
                        if (responses[buff_index].data.name) newValue.push(responses[buff_index].data.name);
                        else newValue.push(responses[buff_index].data.title)
                    });
                    if (newValue.length > 1) newData[key] = newValue;
                    else newData[key] = newValue[0];
                    newValue = []
                } else newData[key] = ''
            } else if (key === 'homeworld') {
                buff_index = responses.findIndex(x => x.url === value);
                newData[key] = responses[buff_index].data.name
            }
        }

        newData.fullyLoaded = true;
        newState.data[index] = newData;
        newState.modalData = newData;
        this.setState(newState)
    };

    render() {
        const {
            entity,
            data,
            pagination,
            search,
            filter,
            isLoading,
            error,
            modalOpen,
            modalData,
            filterField,
            filterValue
        } = this.state;
        if (isLoading) { return <LoadingForm/> }
        if (error) { return <ErrorForm/> }
        return (
            <div>
                <UniCom
                    entity={entity}
                    data={data}
                    onPaginationChange={this.handlePaginationChange}
                    pagination={pagination}
                    onSearchChange={this.handleSearch}
                    search={search}
                    filter={filter}
                    onListObjectClick={this.handleListObjectClick}
                    onFilterChange={this.handleFilter}
                    filterField={filterField}
                    filterValue={filterValue}
                />
                <UniMod show={modalOpen} onClose={this.handleClose} data={modalData} loadAllData={this.loadAllData}/>
            </div>
        );
    }
}

export default UniCon;
