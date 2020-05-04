import React from 'react';
import {Grid, Header, Icon, Segment} from "semantic-ui-react";

export const StarshipListLayout = (props) => {
  
  let result = [];
  let buff = [];
  
  props.data.forEach((entry, i) => {
    buff.push(<Segment className={'segment-content'}>
      <Grid columns={2} stackable onClick={() => props.onListObjectClick(entry)}>
        <Grid.Row>
          <Grid.Column textAlign='center' width={5}>
            <Header icon>
              <Icon className={'space shuttle'}/>
              {entry.name}
            </Header>
            <br/>
          </Grid.Column>
          <Grid.Column floated={'right'} width={11}>
            <p>Model: <strong>{entry.model}</strong></p>
            <p>Class: <strong>{entry.starship_class}</strong></p>
            <p>Cost: <strong>{entry.cost_in_credits}</strong></p>
            <p>Length: <strong>{entry.length}</strong></p>
            <p>Passengers: <strong>{entry.passengers}</strong></p>
            <p>MGLT: <strong>{entry.MGLT}</strong></p>
            <p>Cargo capacity: <strong>{entry.cargo_capacity}</strong></p>
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
    } else if (props.data.length === i + 1) result.push(<Grid.Row key={i} columns={2}>
      <Grid.Column>
        {buff[0]}
      </Grid.Column>
    </Grid.Row>)
  });
  
  return result
};
