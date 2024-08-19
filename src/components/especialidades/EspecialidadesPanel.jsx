import React, { useState } from 'react';
import {
    Header,
    Grid,
    Segment,
} from 'semantic-ui-react';

import '../../styles/fonts.css'

function EspecialidadesPanel() {

    const style = {
        backgroundColor: 'rgba(0,0,0,.87)',
        width: '100%',
        height: '10%',

        padding: '0em'

}

const segmentStyle = {
    margin: '-1em 0em 0em 0em', 
    padding: '8em 0em', 
    backgroundImage: "url('clinica/cover_recepcao.jpg')", 
    //backgroundImage: "url('src/assets/bg-home-img.jpg')", 
    //backgroundImage: "url('../assets/bg-home-img.jpg')",
    backgroundSize: 'cover', // Ajuste o tamanho da imagem conforme necessário
    color: 'white', // Cor do texto no segmento
  };
 

    return (


        <Segment style={segmentStyle} vertical>

        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header as='h3' style={{color: 'white', fontSize: '2.7em', fontFamily: 'Fonte1'}}>
              Oferecemos uma estrutura moderna e acolhedora (mudar texto breve)
              </Header>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>




    )


}

export default EspecialidadesPanel;