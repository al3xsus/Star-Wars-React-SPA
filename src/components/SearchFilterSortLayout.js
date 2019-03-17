import React, {Component} from 'react';
import {Dropdown, Grid, Input, Segment} from "semantic-ui-react";

import {FilterOptions, inputPlaceholder} from "./AuxFns";


class SearchFilterSortLayout extends Component {

    defaultState = {
        search: "",
        filterField: '',
        filterValue: ''
    };

    constructor(props) {
        super(props);
        this.state = { ...this.defaultState }
    }

    componentDidMount() {
        let newState = {...this.state};
        if (this.props.search !== this.state.search) newState.search = this.props.search;
        if (this.props.filterField !== this.state.filterField) newState.filterField = this.props.filterField;
        if (this.props.filterValue !== this.state.filterValue) newState.filterValue = this.props.filterValue;
        this.setState(newState)
    }

    handleChange = (change, field) => {
        const newState = { ...this.state };
        newState[field] = change;
        this.setState(newState);
    };

    render() {
        const {entity, onSearchChange, onFilterChange} = this.props;
        const {search, filterField, filterValue} = this.state;

        let options = FilterOptions(entity);

        return <Grid.Row key={'search-filter-sort'}>
            <Grid.Column>
                <Segment className={'segment-content'}>
                    <Grid stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column floated={'left'}>
                                <Input
                                    fluid={true}
                                    value={search}
                                    onChange={(event, change) => this.handleChange(change.value, "search")}
                                    icon={{
                                        name: 'search',
                                        circular: true,
                                        link: true,
                                        onClick: () => onSearchChange(search)
                                    }}
                                    placeholder={inputPlaceholder(entity)}
                                />
                            </Grid.Column>
                            <Grid.Column floated={'right'}>
                                <Input
                                    fluid={true}
                                    label={<Dropdown
                                        options={options}
                                        item
                                        value={filterField}
                                        onChange={(event, change) => this.handleChange(change.value, "filterField")}
                                        placeholder={'Filter'}
                                    />}
                                    value={filterValue}
                                    onChange={(event, change) => this.handleChange(change.value, "filterValue")}
                                    icon={{
                                        name: 'filter',
                                        circular: true,
                                        link: true,
                                        onClick: () => onFilterChange(filterField, filterValue)
                                    }}
                                    placeholder={'Value'}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    }
}

export default SearchFilterSortLayout
