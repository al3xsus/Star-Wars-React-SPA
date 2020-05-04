import React from 'react';
import {Container, Icon, Segment} from "semantic-ui-react";

import {ReactComponent as Logo} from '../logo.svg';


export const LoadingForm = () => {
  return <Container>
    <Segment textAlign={'center'}>
      <Icon className={'sync alternate'} loading={true} size={'large'}/>
      <h3>Loading, please wait</h3>
    </Segment>
  </Container>
};

export const ErrorForm = () => {
  return <Container>
    <Segment textAlign={'center'}>
      <Icon className={'warning sign'} size={'large'} color={'red'}/>
      <h3>Error happened</h3>
      <h5>Try to reload the page</h5>
    </Segment>
  </Container>
};

export const Form404 = () => {
  return <Container>
    <Segment textAlign={'center'}>
      <Icon className={'delete'} size={'large'} color={'red'}/>
      <h3>404</h3>
      <h5>This page was destroyed by the Death Star</h5>
    </Segment>
  </Container>
};

export const HomeForm = () => {
  return <Container>
    <Segment inverted color='black' textAlign={'center'}>
      <Logo/>
    </Segment>
  </Container>
};
