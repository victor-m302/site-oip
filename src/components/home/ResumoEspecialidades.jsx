import React from 'react'
import { CardGroup, Card, Segment, Header } from 'semantic-ui-react'

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

function ResumoEspecialidades() {

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
    Confira nossos tratamentos/ especialidades:
    </p>

    </div>

    <div style={{marginLeft: '20%', marginRight: '20%'}}>
      
      <CardGroup itemsPerRow={4}>
          <Card color='red' image={src} />
          <Card color='orange' image={src} />
          <Card color='yellow' image={src} />
          <Card color='olive' image={src} />
          <Card color='green' image={src} />
          <Card color='teal' image={src} />
          <Card color='blue' image={src} />
          <Card color='violet' image={src} />
          <Card color='purple' image={src} />
          <Card color='pink' image={src} />
          <Card color='brown' image={src} />
          <Card color='grey' image={src} />
      </CardGroup>

    </div>



  </Segment>

    )
}

export default ResumoEspecialidades
