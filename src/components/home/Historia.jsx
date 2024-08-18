import React, { useState } from 'react';
import {
    Divider,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react';

import imgEquipe1 from '../../assets/homepage/17_equipe_1.jpg';
import imgEquipe2 from '../../assets/homepage/17_equipe_2.jpg';




export default function Historia() {

    const paragraphStyle = {
        fontSize: '1.33em',
        padding: '4em',
    }

    return (
        <Segment textAlign='center'>

            <Header as='h3' style={{ fontSize: '2em' }}>
                Nossa História
            </Header>

            <Divider/>

            <Header textAlign='left' style={{marginLeft: '10%'}}>
                <Icon name='quote left' size='tiny' /> 
                <Header.Content as={'h2'}>
                    O seu sorriso é a nossa motivação
                </Header.Content>
            </Header>

            <Divider/>

            <div style={paragraphStyle}>

                <p>
                    A nossa história se iniciou em 1986 e, desde então, vem crescendo, inovando e sempre se atualizando com novos materiais e técnicas para melhor atender a todos com muita qualidade.
                </p>

                <p>
                    Atualmente, a clínica possui 4 salas de atendimentos com equipamentos modernos, sendo que uma delas tem total acessibilidade, sala de esterilização, laboratório de prótese e uma aconchegante recepção.
                </p>

                <p >
                Contamos também com uma equipe multidisciplinar para suprir as necessidades estéticas e funcionais. O seu sorriso é a nossa motivação.
                </p>
            </div>

            <div className="ui images">
                <img className="ui large image" src={imgEquipe1} />
                {/* <img className="ui large image" src={imgEquipe2} /> */}
            </div>

            <br/>

        </Segment>


    )

}