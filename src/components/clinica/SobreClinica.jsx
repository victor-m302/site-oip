import React, { useState } from 'react';
import {
    Card,
    Divider,
    Header,
    Icon,
    Message,
    Segment,
} from 'semantic-ui-react';

//import imgEquipe1 from '../../assets/homepage/17_equipe_1.jpg';
//import imgEquipe2 from '../../assets/homepage/17_equipe_2.jpg';

export default function SobreClinica() {

    const paragraphStyle = {
        fontSize: '1.33em',
        padding: '4em',
    }



    const sala = [
        'clinica/4_recepcao.jpg',
        'clinica/5_sala_dra_vania.jpg',
        'clinica/6_sala_sandra.jpg',
        'clinica/7_img.jpg',
        'clinica/8_sala_dra_debora.jpg',
        'clinica/10_wireframe.jpg',
        'clinica/11_wireframe.jpg'        
    ]

    return (
        <Segment textAlign='center'>

            <Header as='h3' style={{ fontSize: '2em' }}>
                A Clínica
            </Header>

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
                Imagens de 4 a 11 
                </p>
            </Message>            

            <Card.Group itemsPerRow={4}>
                <Card color='red' image={sala[0]} />
                <Card color='orange' image={sala[1]} />
                <Card color='yellow' image={sala[2]} />
                <Card color='olive' image={sala[3]} />
                <Card color='green' image={sala[4]} />
                <Card color='teal' image={sala[5]} />
                <Card color='blue' image={sala[6]} />
            </Card.Group>


            </div>
        </Segment>


    )

}