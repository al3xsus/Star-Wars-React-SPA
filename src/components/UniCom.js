import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'

import {MovieListLayout} from './MovieListLayout'
import {PeopleListLayout} from './PeopleListLayout'
import {StarshipListLayout} from './StarshipListLayout'
import {PaginationForm} from "./PaginationForm";
import SearchFilterSortLayout from './SearchFilterSortLayout'


class UniCom extends Component {

    render() {
        const { entity, data, pagination, onPaginationChange, onSearchChange, search, filter, onListObjectClick } = this.props
        return (
            <Grid container columns={1} stackable>
                <SearchFilterSortLayout
                    entity={entity}
                    onSearchChange={onSearchChange}
                    search={search}
                    filter={filter}
                />
                {
                    entity === 'films'
                        ?
                        <MovieListLayout data={data} onListObjectClick={onListObjectClick}/>
                        :
                        entity === 'people'
                            ?
                            <PeopleListLayout data={data} onListObjectClick={onListObjectClick}/>
                            :
                            <StarshipListLayout data={data} onListObjectClick={onListObjectClick}/>
                }
                <PaginationForm pagination={pagination} onPaginationChange={onPaginationChange}/>
            </Grid>
        );
    }
}

export default UniCom;
