import React from 'react';
import {Grid, Header, Icon, Segment} from "semantic-ui-react";

export const MovieListLayout = (props) => {
  return props.data.map((entry, i) => {
    return <Grid.Row key={i} onClick={() => props.onListObjectClick(entry)}>
      <Grid.Column>
        <Segment>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column floated={'left'} width={2}>
                <Header icon>
                  <Icon className={'film'}/>
                  {entry.title}
                </Header>
                <br/>
              </Grid.Column>
              <Grid.Column floated={'left'} width={14}>
                <p>Episode: <strong>{entry.episode_id}</strong></p>
                <p>Director: <strong>{entry.director}</strong></p>
                <p>Producer: <strong>{entry.producer}</strong></p>
                <p>Release date: <strong>{entry.release_date}</strong></p>
                <p>Opening crawl: <strong>{entry.opening_crawl}</strong></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  })
};
