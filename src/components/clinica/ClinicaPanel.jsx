import React, { useState } from 'react';
import {
    Header,
    Grid,
    Segment,
} from 'semantic-ui-react';

import '../../styles/fonts.css'

function ClinicaPanel() {

    const style = {
        backgroundColor: 'rgba(0,0,0,.87)',
        width: '100%',
        height: '10%',

        padding: '0em'

}

const segmentStyle = {
    margin: '-1em 0em 0em 0em',
    padding: '8em 0em', 
    backgroundImage: "url('home/cover-home.png')", 
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
              Bem-vindos a <p style={{color: 'lightblue'}}>ODONTOLOGIA INTEGRADA PINTAUDI,</p> nossos profissionais estão prontos para te atender.
              </Header>
              {/* <p style={{ fontSize: '1.33em' }}>
              Entre em Contato
              </p> */}
              <a href='https://api.whatsapp.com/send?phone=5511979795390&text=Odontologia%20OIP'>
              <button className="huge ui button" style={{backgroundColor: '#86c5da'}}>
                    Agendar consulta
              </button>
              </a>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
              {/* <HomeCarrousel/> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>




    )


}

export default ClinicaPanel;