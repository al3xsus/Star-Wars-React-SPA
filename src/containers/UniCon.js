import React, { Component } from "react";

import UniCom from '../components/UniCom'
import {UniMod} from "../components/UniMod";
import {LoadingForm, ErrorForm} from '../components/HelperForms'

class UniCon extends Component {

    defaultState = {
        entity: null,
        data: [],
        pagination: {
            page: 1,
            total: null
        },
        search: '',
        filter: '',
        isLoading: false,
        error: null,
        modalOpen: false,
        modalData: null
    };

    constructor(props) {
        super(props);
        this.state = {...this.defaultState, entity: this.props.location.pathname.replace("/", "")}
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        this.setState({isLoading: true});
        try {
            const {entity, pagination, search, filter} = this.state;
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
        this.setState({...newState}, () => this.loadData());
    };

    handleSearch = (search) => {
        this.setState({isLoading: true});
        const newState = { ...this.state };
        newState.search = search;
        this.setState({ ...newState}, () => this.loadData());
    }

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false, modalData: null });

    handleListObjectClick = (data) => {
        this.setState({isLoading: true});
        const newState = { ...this.state };
        newState.modalData = data;
        this.setState({...newState}, () => this.handleOpen());
    };

    render() {
        const { entity, data, pagination, search, filter, isLoading, error, modalOpen, modalData } = this.state;
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
                />
                <UniMod show={modalOpen} onClose={this.handleClose} data={modalData}/>
            </div>
        );
    }
}

export default UniCon;
