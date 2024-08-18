import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function CardsEquipe() {

  const dentistas = {
    dra_vania: 'dentistas/13_Dra_Vania.jpg',
    dra_sandra: 'dentistas/14_Dra_Sandra.jpg',
    dra_debora: 'dentistas/15_Dra_Debora.jpg',
    dra_valeska: 'dentistas/16_Dra_Valeska.jpg',
  }

  return (
    <Card.Group itemsPerRow={4}>
      {/* Dra. Vânia */}
      <Card>
        <Image src={dentistas.dra_vania} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Dra. Vânia Cristina Pintaudi Amorim</Card.Header>
          <Card.Meta>CROSP: 32.664</Card.Meta>
          <Card.Description>
            Especialista em Ortodontia - FACSETE
            Mestre e Especialista em Prótese - USP
            Profa. de Prótese dos cursos de Graduação e Pós-Graduação da
            Universidade Cidade de São Paulo (UNICID) por mais de 30 anos
            Profa. do curso de especialização de Prótese Total do Senac e IFEO
          </Card.Description>
        </Card.Content>
      </Card>

      {/* Dra. Sandra */}
      <Card>
        <Image src={dentistas.dra_sandra} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Dra. Sandra Duarte Oliveira</Card.Header>
          <Card.Meta>CROSP: 53.189</Card.Meta>
          <Card.Description>
            Especialista em Dentística – APCD
            Especialista em Implantodontia - Unicid
          </Card.Description>
        </Card.Content>
      </Card>

      {/* Dra. Débora */}
      <Card>
        <Image src={dentistas.dra_debora} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Dra. Débora Rolim Escanhoela</Card.Header>
          <Card.Meta>CROSP: 66.210</Card.Meta>
          <Card.Description>
            Especialista em Odontopediatria – USP
            Especialista em Endodontia – São Leopoldo Mandic
          </Card.Description>
        </Card.Content>
      </Card>

      {/* Dra. Valeska */}
      <Card>
        <Image src={dentistas.dra_valeska} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Dra. Valeska Pinheiro Ferreira de Sousa</Card.Header>
          <Card.Meta>CROSP: 161.532</Card.Meta>
          <Card.Description>
            Clínica Geral
            Harmonização Orofacial
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default CardsEquipe;
