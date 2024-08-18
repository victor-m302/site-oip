import { Segment, Header, Container } from "semantic-ui-react";

import CardsEquipe from '../components/equipe/CardsEquipe'


function Equipe() {




    return (
        <Container textAlign="center">
            <Header as="h1">
                Doutoras
            </Header>

            <Header as="h5">
                inserir texto
            </Header>


        <CardsEquipe/>

        </Container>

    )
}

export default Equipe;