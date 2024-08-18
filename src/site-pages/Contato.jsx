import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";

import logoOIP from '../assets/logo.png'


function IframeComponent({ src, width, height }) {
    const iframeHtml = `<iframe src="${src}" width="${width}" height="${height}" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  
    return <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />;
  }
  

function Contato() {


    const logoStyle = {
        width: "10%"
    }

    const iconStyle = { backgroundColor: '#ADD8E6', color: 'white'}

    // Uso:
    const iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.464645338644!2d-46.58723412482958!3d-23.587663478781813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c0d492433bb%3A0xd150f10f000ff8c6!2sR.%20Ibitirama%2C%20670%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003134-001!5e0!3m2!1spt-BR!2sbr!4v1722737253915!5m2!1spt-BR!2sbr';
    const iframeWidth = 600;
    const iframeHeight = 450;
  
    

    return (
        <Segment vertical >
            <Container>
                <Grid divided stackable>

                    <Grid.Row centered>
                        <img src={logoOIP} style={logoStyle} alt="OIP Logo" />
                    </Grid.Row>

                    <Grid.Row centered>
                        <Header as='h1' >
                            Fale Conosco
                        </Header>
                    </Grid.Row>
                    <Grid.Row centered>
                    <br/><br/>
                    </Grid.Row>


                    <Grid.Row columns={2} divided>
                        <Grid.Column>

                        <Header as='h3' >
                            <Icon size="large" circular name='home' style = {iconStyle} />
                            Rua Ibitirama, 670 Vila Prudente - São Paulo (SP) 
                        </Header>
                        {/* CEP 03134-001 */}

                        <Header as='h3' >
                            <Icon size="large" circular  name='whatsapp' style = {iconStyle} />
                            (11) 97979-5390 
                        </Header>

                        
                        <Header as='h3' >
                            <Icon size="large" circular  name='phone' style = {iconStyle} />
                            (11) 2345-5390 / (11) 2347-1990  
                        </Header>
                           
                        <Header as='h3' >
                            <Icon size="large" circular  name='mail'  style = {iconStyle}/>
                            oippintaudi@gmail.com
                        </Header>



                        </Grid.Column>

                        <Grid.Column>
                            <IframeComponent src={iframeSrc} width={iframeWidth} height={iframeHeight} />
                        </Grid.Column>


                    </Grid.Row>


                    <Grid.Row centered>
                        <p></p>
                    </Grid.Row>


                </Grid>
            </Container>
        </Segment>
    )
}

export default Contato;