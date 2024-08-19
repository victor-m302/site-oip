import React, { useState } from 'react';
import {
    Header,
    Grid,
    Segment,
} from 'semantic-ui-react';

import '../../styles/fonts.css'

function EquipePanel() {

    const style = {
        backgroundColor: 'rgba(0,0,0,.87)',
        width: '100%',
        height: '10%',

        padding: '0em'

}

const segmentStyle = {
    margin: '-1em 0em 0em 0em', 
    padding: '18em 0em', 
    backgroundImage: "url('dentistas/cover_equipe.jpg')", 
    //backgroundImage: "url('src/assets/bg-home-img.jpg')", 
    //backgroundImage: "url('../assets/bg-home-img.jpg')",
    backgroundSize: 'cover', // Ajuste o tamanho da imagem conforme necessário
    color: 'white', // Cor do texto no segmento
  };
  

    return (


        <Segment style={segmentStyle} vertical>

        <Grid container stackable verticalAlign='bottom'>
              <Header as='h3' style={{paddingTop: '200px' ,color: 'white', fontSize: '2.7em', fontFamily: 'Fonte1'}}>
              Nossa equipe está pronta para atender.
              </Header>
        </Grid>
      </Segment>




    )


}

export default EquipePanel;