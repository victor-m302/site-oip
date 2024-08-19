import { Segment, Header, Container, Divider, Message } from "semantic-ui-react";

import CardsEquipe from '../components/equipe/CardsEquipe'

import imgEquipe2 from '../assets/homepage/17_equipe_2.jpg';

import EquipePanel from '../components/equipe/EquipePanel'

function Equipe() {


    return (
    <div>
        <EquipePanel/>

        <br/><br/>
        <Container textAlign="center">

            <Header as="h1">
                Dentistas
            </Header>

            <Message color='blue'>Colocar as qualificações em bullets</Message>

        <CardsEquipe/>


            
        <Segment>
            <Header>
                Equipe de dentistas, auxiliares e estagiárias 
            </Header>

            <Divider/>

            <img src={imgEquipe2} alt="img_17" style={{width: '60%'}} />
        </Segment>

        </Container>

    </div>


    )
}

export default Equipe;