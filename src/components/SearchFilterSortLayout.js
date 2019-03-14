import React, {Component} from 'react';
import {Input, Grid, Segment} from "semantic-ui-react";


class SearchFilterSortLayout extends Component {

    defaultState = {
        search: ""
    };

    constructor(props) {
        super(props);
        this.state = { ...this.defaultState }
    }

    componentDidMount() {
        if (this.props.search !== this.state.search) this.setState({search: this.props.search})
    }

    handleChange = (e, { value }) => {
        const newState = { ...this.state };
        newState.search = value;
        this.setState(newState);
    };

    render() {
        const {entity, onSearchChange} = this.props;
        const {search} = this.state;

        let options = [];

        switch (entity) {
            case 'films':
                options = [
                    { key: 'title', text: 'title', value: 'title' },
                ];
                break;
            case 'people':
                options = [
                    { key: 'name', text: 'name', value: 'name' },
                ];
                break;
            default:
                options = [
                    { key: 'name', text: 'name', value: 'name' },
                    { key: 'model', text: 'model', value: 'model' }
                ]
        }

        return <Grid.Row key={'search-filter-sort'}>
            <Grid.Column>
                <Segment className={'segment-content'}>
                    <Grid stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column floated={'left'}>
                                <Input
                                    fluid={true}
                                    value={search}
                                    onChange={this.handleChange}
                                    icon={{
                                        name: 'search',
                                        circular: true,
                                        link: true,
                                        onClick: () => onSearchChange(search)
                                    }}
                                    placeholder={ entity === 'films' ? 'title' : entity === 'people' ? 'name' : 'name or model'}
                                />
                            </Grid.Column>
                            <Grid.Column floated={'right'}>
                                <Input
                                    fluid={true}
                                    placeholder={ 'filter under construction' }
                                    disabled={true}
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
