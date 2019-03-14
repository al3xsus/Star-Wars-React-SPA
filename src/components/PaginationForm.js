import React from 'react';
import { Grid, Menu } from "semantic-ui-react";

export const PaginationForm = (props) => {

    const items = Array.from(Array(props.pagination.total), (_, i) => {
        return <Menu.Item
            name={`${i+1}`}
            active={i+1 === props.pagination.page}
            onClick={() => props.onPaginationChange(i+1)}
            key={i}
            disabled={i+1 === props.pagination.page}
        >
            {i+1}
        </Menu.Item>
    });

    return <Grid.Row key={'pagination'} columns={1}>
        <Grid.Column>
            <Menu
                stackable={window.innerWidth < 400}
                compact={ window.innerWidth > 400 }
                floated={window.innerWidth < 400 ? null : 'right'}>
                {items}
            </Menu>
        </Grid.Column>
    </Grid.Row>
};
