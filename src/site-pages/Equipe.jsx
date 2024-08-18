import { Segment, Header } from "semantic-ui-react";

import CardsEquipe from '../components/equipe/CardsEquipe'


function Equipe() {




    return (

        <Segment>
            <Header as="h3">
                Doutoras
            </Header>

            <Header as="h5">
                Descrição
            </Header>


        <CardsEquipe/>

        </Segment>

    )
}

export default Equipe;