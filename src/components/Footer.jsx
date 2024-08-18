
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
    
      <Grid.Row centered>
          <Header as='h4' >
            Endereço
          </Header>
        </Grid.Row>

        <Grid.Row centered>
          <p>Rua Ibitirama, Nº 670, bairro Vila Prudente CEP 03134-001 - São Paulo (SP)</p>
        </Grid.Row>

        <Grid.Row centered>
          <p>2024 - OIP - Todos os direitos reservados.</p>
        </Grid.Row>

    </Grid>
  </Container>    
  </Segment>

    )

};

