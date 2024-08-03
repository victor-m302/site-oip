import React, { useState } from 'react';
import {
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

import imgEquipe1 from '../assets/homepage/17_equipe_1.jpg';
import imgEquipe2 from '../assets/homepage/17_equipe_2.jpg';
import CarouselTratEsp from './CarouselTratEsp';




export default function HomeSection2() {


    const texto = {
          textoA: 'Odontopediatria: Especialista experiente e ambiente preparado para o atendimento de crianças',
          textoB: 'Endodontia: Também conhecida como tratamento de canal, esse processo é necessário em casos de inflamações causadas por cáries profundas, trauma e infiltração de bactérias.',
          textoC: 'Check up e planejamento digital: Hoje, o fluxo digital permite proporcionar aos pacientes tratamentos mais assertivos e previsíveis.',
          textoD: 'Clareamento dental: É um tratamento estético que deixa os dentes mais brancos, melhorando o sorriso e a auto estima.',
          textoE: 'Próteses  imagens : A prótese visa substituir total ou parcialmente um ou mais dentes e tecidos circunvizinhos. Pode ser confeccionada de diversos materiais com a função de restabelecer a estética, a fonética e a função mastigatória. Além disso, as próteses podem ser  fixas, parciais removíveis, totais  ou sobre implantes.',
          textoF: '                Ortodontia: A ortodontia é a área da odontologia responsável pelo estudo, prevenção e correção dos dentes e dos ossos maxilares, melhorando o sorriso, mastigação e até mesmo a fala. A correção ortodôntica pode ser realizada com aparelhos fixos ou removíveis como os alinhadores Invisalign',
      };


    return (
        <Segment textAlign='center'>

            <Header as='h3' style={{ fontSize: '2em' }}>
                Tratamentos e Especialidades
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Ambiente aconchegante, equipamentos de ponta e uma equipe de dentistas experientes e qualificados.
            Confira nossos tratamentos/ especialidades:
            </p>


        <Grid textAlign='center'>
        <Grid.Row>
            <Grid.Column width={6}>
                <CarouselTratEsp texto={texto}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={12}>


            </Grid.Column>

        </Grid.Row>
        </Grid>


        </Segment>


    )

}