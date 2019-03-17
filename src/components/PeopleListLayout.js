import React from 'react';
import {Grid, Header, Icon, Segment} from "semantic-ui-react";

import {genderReveal} from "./AuxFns";


export const PeopleListLayout = (props) => {

    let result = [];
    let buff = [];

    props.data.forEach((entry, i) => {
        buff.push(<Segment padded>
            <Grid columns={2} stackable width={'equal'} onClick={() => props.onListObjectClick(entry)}>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Header icon>
                            <Icon
                                className={genderReveal(entry.gender)}
                            />
                            {entry.name}
                        </Header>
                        <br/>
                    </Grid.Column>
                    <Grid.Column floated={'right'}>
                        <p>Birth Year: <strong>{entry.birth_year}</strong></p>
                        <p>Eye color: <strong>{entry.eye_color}</strong></p>
                        <p>Hair color: <strong>{entry.hair_color}</strong></p>
                        <p>Skin color: <strong>{entry.skin_color}</strong></p>
                        <p>Height: <strong>{entry.height}</strong></p>
                        <p>Mass: <strong>{entry.mass}</strong></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>);
        if (buff.length > 1) {
            result.push(<Grid.Row key={i} columns={2}>
                <Grid.Column>
                    {buff[0]}
                </Grid.Column>
                <Grid.Column>
                    {buff[1]}
                </Grid.Column>
            </Grid.Row>);
            buff = []
        }
        else if (props.data.length === i+1) result.push(<Grid.Row key={i} columns={2}>
            <Grid.Column>
                {buff[0]}
            </Grid.Column>
        </Grid.Row>)
    });

    return result
};
