import React, { useState } from 'react';
import { Segment, Card, Image, CardGroup, ButtonGroup, Button, Header, Container } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardServico from './CardServico';



function NossoTrabalho() {

  const [mostrarConteudo, setMostrarConteudo] = useState(false);

  const handleButtonClick = () => {
    setMostrarConteudo(!mostrarConteudo);
  };


  const cards = [
    {
      title: 'Odontopediatria',
      desc: 'Especialista experiente e ambiente preparado para o atendimento de crianças.',
      image: 'carrossel2/c2_item1.jpg'
    },
    {
      title: 'Endodontia',
      desc: 'Também conhecida como tratamento de canal, esse processo é necessário em casos de inflamações causadas por cáries profundas, trauma e infiltração de bactérias.',
      image: 'carrossel2/c2_item2.png'
    },
    {
      title: 'Check-up e Planejamento Digital',
      desc: 'Hoje, o fluxo digital permite proporcionar aos pacientes tratamentos mais assertivos e previsíveis.',
      image: 'carrossel2/c2_item3.gif'
    },
    {
      title: 'Clareamento Dental',
      desc: 'É um tratamento estético que deixa os dentes mais brancos, melhorando o sorriso e a autoestima.',
      image: 'carrossel2/c2_item4.png'
    },
    {
      title: 'Alinhadores Invisalign',
      desc: 'A prótese visa substituir total ou parcialmente um ou mais dentes e tecidos circunvizinhos. Pode ser confeccionada de diversos materiais com a função de restabelecer a estética, a fonética e a função mastigatória. Além disso, as próteses podem ser fixas, parciais removíveis, totais ou sobre implantes.',
      image: 'carrossel2/c2_item5.png'
    },
    {
      title: 'Ortodontia',
      desc: 'A ortodontia é a área da odontologia responsável pelo estudo, prevenção e correção dos dentes e dos ossos maxilares, melhorando o sorriso, mastigação e até mesmo a fala. A correção ortodôntica pode ser realizada com aparelhos fixos ou removíveis como os alinhadores Invisalign.',
      image: 'carrossel2/c2_item6.jpg'
    },
  ]

  const paragraphStyle = {
    fontSize: '1.33em',
    padding: '4em',
}

  return (

    <Segment>


      <Header as="h1" textAlign='center'>
        Especialidades
      </Header>


      <div style={paragraphStyle}>

      <p>
        Ambiente aconchegante, equipamentos de ponta e uma equipe de dentistas experientes e qualificados.      
      </p>
      <p>
      Confira nossos tratamentos/ especialidades:
      </p>

    </div>


      <div style={{ margin: '2em' }}>
          <CardGroup itemsPerRow={6}>
            <CardServico title={cards[0].title} image={cards[0].image} desc={cards[0].desc} />
            <CardServico title={cards[1].title} image={cards[1].image} desc={cards[1].desc} />
            <CardServico title={cards[2].title} image={cards[2].image} desc={cards[2].desc} />
            <CardServico title={cards[3].title} image={cards[3].image} desc={cards[3].desc} />
            <CardServico title={cards[4].title} image={cards[4].image} desc={cards[4].desc} />
            <CardServico title={cards[5].title} image={cards[5].image} desc={cards[5].desc} />
          </CardGroup>
        </div>



      {/* <div style={{margin: '0em 4em'}}> */}
      <Container textAlign='right'>
        <ButtonGroup>
          <Button onClick={handleButtonClick} icon='angle left' />
          <Button onClick={handleButtonClick} icon='angle right' />
        </ButtonGroup>
      </Container>
      {/* </div> */}

      <br/><br/><br/>

    </Segment>



  )
}


export default NossoTrabalho;

const a =`
      {!mostrarConteudo && (
        <div style={{ margin: '4em' }}>
          <CardGroup itemsPerRow={3}>
            <CardServico title={cards[0].title} image={cards[0].image} desc={cards[0].desc} />
            <CardServico title={cards[1].title} image={cards[1].image} desc={cards[1].desc} />
            <CardServico title={cards[2].title} image={cards[2].image} desc={cards[2].desc} />
          </CardGroup>
        </div>
      )}

      {mostrarConteudo && (
        <div style={{ margin: '4em' }}>
          <CardGroup itemsPerRow={3}>
            <CardServico title={cards[3].title} image={cards[3].image} desc={cards[3].desc} />
            <CardServico title={cards[4].title} image={cards[4].image} desc={cards[4].desc} />
            <CardServico title={cards[5].title} image={cards[5].image} desc={cards[5].desc} />
          </CardGroup>
        </div>
      )}
`