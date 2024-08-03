import React, { useState } from 'react';
import {
    Header,
    Segment,
} from 'semantic-ui-react';

import imgEquipe1 from '../assets/homepage/17_equipe_1.jpg';
import imgEquipe2 from '../assets/homepage/17_equipe_2.jpg';




export default function HomeSection() {


    return (
        <Segment textAlign='center'>

            <Header as='h3' style={{ fontSize: '2em' }}>
                Sobre Nós
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            A nossa história se iniciou em 1986 e, desde então, vem crescendo, inovando e sempre se atualizando com novos materiais e técnicas para melhor atender a todos com muita qualidade. Atualmente, a clínica possui 4 salas de atendimentos com equipamentos modernos, sendo que uma delas tem total acessibilidade, sala de esterilização, laboratório de prótese e uma aconchegante recepção. Contamos também com uma equipe multidisciplinar para suprir as necessidades estéticas e funcionais. O seu sorriso é a nossa motivação. 
            </p>

            <div className="ui images">
                <img className="ui medium image" src={imgEquipe1}/>
                <img className="ui large image" src={imgEquipe2}/>
            </div>

        </Segment>


    )

}