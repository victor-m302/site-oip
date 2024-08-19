
import React, { useState } from 'react';
import {
  Grid,
  Container,
  Header,
  List,
  Segment
} from 'semantic-ui-react';


export default function Footer() {

  return (

  <Segment vertical style = {{ backgroundColor: '#ADD8E6', padding: '2em 0em'}}>
  <Container style={{backgroundColor: '#ADD8E6'}}>
    <Grid divided  stackable>
    

    <List>
    <List.Item icon='marker' content='Vila Prudente- São Paulo (SP)' />
    <List.Item icon='phone' content='(11) 2345-5390 / (11) 2347-1990 ' />
    <List.Item
      icon='mail'
      content={<a href='mailto:oippintaudi@gmail.com'>oippintaudi@gmail.com</a>}
    />
  </List>






        <Grid.Row centered>
          <p>2024 - OIP - Todos os direitos reservados.</p>
        </Grid.Row>

    </Grid>
  </Container>    
  </Segment>

    )

};

