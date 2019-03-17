import React, {Component} from "react";
import {Grid} from 'semantic-ui-react'

import {MovieListLayout} from './MovieListLayout'
import {PeopleListLayout} from './PeopleListLayout'
import {StarshipListLayout} from './StarshipListLayout'
import {PaginationForm} from "./PaginationForm";
import SearchFilterSortLayout from './SearchFilterSortLayout'


class UniCom extends Component {

    returnLayout = (entity, data, onListObjectClick) => {
        switch (entity) {
            case 'films':
                return <MovieListLayout data={data} onListObjectClick={onListObjectClick}/>;
            case 'people':
                return <PeopleListLayout data={data} onListObjectClick={onListObjectClick}/>;
            default:
                return <StarshipListLayout data={data} onListObjectClick={onListObjectClick}/>
        }
    };

    render() {
        const {
            entity,
            data,
            pagination,
            onPaginationChange,
            onSearchChange,
            search,
            filter,
            onListObjectClick,
            onFilterChange,
            filterField,
            filterValue
        } = this.props;
        return (
            <Grid container columns={1} stackable>
                <SearchFilterSortLayout
                    entity={entity}
                    onSearchChange={onSearchChange}
                    search={search}
                    filter={filter}
                    onFilterChange={onFilterChange}
                    filterField={filterField}
                    filterValue={filterValue}
                />
                {
                    this.returnLayout(entity, data, onListObjectClick)
                }
                <PaginationForm pagination={pagination} onPaginationChange={onPaginationChange}/>
            </Grid>
        );
    }
}

export default UniCom;
