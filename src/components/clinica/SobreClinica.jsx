import React, { useState } from 'react';
import {
    Divider,
    Header,
    Icon,
    Message,
    Segment,
} from 'semantic-ui-react';

import imgEquipe1 from '../../assets/homepage/17_equipe_1.jpg';
import imgEquipe2 from '../../assets/homepage/17_equipe_2.jpg';




export default function SobreClinica() {

    const paragraphStyle = {
        fontSize: '1.33em',
        padding: '4em',
    }

    return (
        <Segment textAlign='center'>

            <Header as='h3' style={{ fontSize: '2em' }}>
                A Clínica
            </Header>

            <Divider/>

                <Header as="h2" textAlign='left'>
                    <Icon name='quote left' size='big' style={{marginLeft: '10%'}} />  Frase Força</Header>

            <Divider/>

            <div style={paragraphStyle}>

            <p>
            A OIP oferece 4 consultórios odontológicos com tecnologia de ponta, inclusive com o Scanner Itero que realiza check ups digitais e moldagens virtuais, possibilitando planejamentos mais assertivos para nossos pacientes. 
            <br/>
            Temos a sala de fluxo digital com Impressora 3D para obtenção de modelos, placas e guias cirúrgicos. 
            <br/>
            A nossa clínica conta também com sala de esterilização, onde se realiza todo o processo de desinfecção e esterilização dos materiais contaminados. 
            <br/>
            Possuímos ainda um laboratório de prótese equipado para trabalhos analógicos. 
            <br/>
            Por fim, não menos importante, na entrada temos uma recepção acolhedora e confortável para receber nossos clientes. 
            </p>


            <Message>
                <Message.Header>Carrosel</Message.Header>
                <p>
                Imagens de 4 a 11 ( Obs. Tem fotos com o mesmo número que vc vê o que fica melhor)
                </p>
            </Message>            

            </div>
        </Segment>


    )

}