import { Segment, Header, Container, Divider } from "semantic-ui-react";

import CardsEquipe from '../components/equipe/CardsEquipe'

import imgEquipe2 from '../assets/homepage/17_equipe_2.jpg';


function Equipe() {


    return (
        <Container textAlign="center">
            <Header as="h1">
                Dentistas
            </Header>

            <Header as="h5">
                Nossa equipe está pronta para atender.
            </Header>


        <CardsEquipe/>


            
        <Segment>
            <Header>
                Equipe de dentistas, auxiliares e estagiárias 
            </Header>

            <Divider/>

            <img src={imgEquipe2} alt="img_17" style={{width: '60%'}} />
        </Segment>





        </Container>

    )
}

export default Equipe;