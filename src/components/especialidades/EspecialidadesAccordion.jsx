import React, { Component, useContext, useState } from 'react';
import { Accordion, Icon, Segment} from 'semantic-ui-react';

import { EspecialidadesContext } from './EspecialidadesProvider';

function EspecialidadesAccordion() { 

    const { selectedAccordion, handleAccordionClick } = useContext(EspecialidadesContext);

    function handleClick (e, titleProps) {
      const { index } = titleProps;
      //const { selectedAccordion } = selectedAccordion;
      const newIndex = selectedAccordion === index ? -1 : index;
      handleAccordionClick(newIndex)      
    };

    return (

        <Segment textAlign='center'>

        <Accordion fluid styled>

        {/* Periodontia */}
        <Accordion.Title
          active={selectedAccordion === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Periodontia
        </Accordion.Title>
        <Accordion.Content active={selectedAccordion === 0}>
          <p>
          Periodontia é a especialidade odontológica que trata dos tecidos que dão sustentação para os dentes. 
          Seus procedimentos objetivam prevenir, diagnosticar e tratar problemas e doenças que atingem a gengiva, o ligamento periodontal e o osso alveolar. 
          A periodontia estética, por sua vez, é aquela que objetiva promover a harmonia entre os tecidos gengivais e os dentes, tornando o sorriso mais bonito e agradável.
          </p>
        </Accordion.Content>




        {/* Cirurgia Odontológica */}
        <Accordion.Title
          active={selectedAccordion === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Cirurgia Odontológica
        </Accordion.Title>
        <Accordion.Content active={selectedAccordion === 1}>
          <p>
            Utilizadas para o tratamento de traumas, deformidades faciais e
            doenças. Podem se caracterizar por extrações simples e cirurgias
            gengivais até grandes reconstruções ósseas. Importante ressaltar
            como etapa preliminar de qualquer tratamento, a OIP (Odontologia
            Integrada Pintaudi) realiza uma análise completa da saúde do
            paciente e estabelece um plano de tratamento através de adequações
            do meio, radiografias, tomografias computadorizadas e exames
            laboratoriais. Assim garantindo a saúde do cliente e o sucesso dos
            resultados.
          </p>
        </Accordion.Content>

        {/* Implantes Dentários */}
        <Accordion.Title
          active={selectedAccordion === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Implantes Dentários
        </Accordion.Title>
        <Accordion.Content active={selectedAccordion === 2}>
          <p>
            O implante é um cilindro de titânio que é colocado no interior do
            osso, abaixo da gengiva e tem como objetivo substituir e fazer o
            mesmo papel da raiz do dente, ou seja, uma fixação para diferentes
            tipos de próteses dentárias: de um único dente, de vários dentes ou
            até de todos os dentes.
          </p>
        </Accordion.Content>

        {/* Prótese Dentária */}
        <Accordion.Title
          active={selectedAccordion === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Prótese Dentária
        </Accordion.Title>
        <Accordion.Content active={selectedAccordion === 3}>
          <p>
            A prótese visa substituir total ou parcialmente um ou mais dentes e
            tecidos circunvizinhos. Pode ser confeccionada de diversos materiais
            com a função de restabelecer a estética, a fonética e a função
            mastigatória. Além disso, as próteses podem ser fixas, parciais
            removíveis, totais ou sobre implantes.
          </p>
        </Accordion.Content>

        {/* Endodontia */}
        <Accordion.Title
          active={selectedAccordion === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Endodontia
        </Accordion.Title>
        <Accordion.Content active={selectedAccordion === 4}>
          <p>
            Também conhecida como tratamento de canal, esse processo é necessário
            em casos de inflamações causadas por cáries profundas, trauma e
            infiltração de bactérias. O tratamento consiste na remoção do tecido
            mole (polpa) que se encontra na parte interior do canal, podendo
            estar vivo, sadio, inflamado, infectado ou necrosado/morto. A
            Odontologia Integrada Pintaudi segue normas específicas de limpeza e
            segurança, garantindo tranquilidade e soluções eficazes nos
            tratamentos de canais.
          </p>
        </Accordion.Content>

 {/* Ortodontia */}
 <Accordion.Title
        active={selectedAccordion === 5}
        index={5}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Ortodontia (imagem do invisalign)
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 5}>
        <p>
          É a área da odontologia que estuda o crescimento e desenvolvimento da
          face e dos dentes decíduos (dentes de leite), mistos e permanentes,
          observando desvios, prevenindo, interferindo e corrigindo as más
          oclusões dentárias. Tendo como objetivo principal restabelecer o
          perfeito encaixe dos dentes superiores com os inferiores. Além da
          correção dentária, os diversos tratamentos ortodônticos trazem outros
          benefícios ao paciente.
        </p>
      </Accordion.Content>

      {/* Dentística */}
      <Accordion.Title
        active={selectedAccordion === 6}
        index={6}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Dentística
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 6}>
        <p>
          A dentística tem como objetivo recuperar a saúde bucal por meio da
          remoção de cáries e restauração dos dentes. Além disso, essa
          especialidade compreende também restaurações em resinas e facetas,
          trazendo uma estética dental harmonizada por meio de um planejamento
          personalizado pelos profissionais, oferecendo equilíbrio para cada
          paciente e clareamento dental.
        </p>
      </Accordion.Content>

      {/* Odontopediatria */}
      <Accordion.Title
        active={selectedAccordion === 7}
        index={7}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Odontopediatria
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 7}>
        <p>
          Esta é uma especialidade que trata de bebês e crianças. Tem como
          função orientar, desde a gestação, quanto aos cuidados que se deve ter
          em relação à saúde bucal do seu bebê. Englobamos desde o controle e
          orientação do processo de desenvolvimento do sistema mastigatório da
          criança, bem como a prevenção dos traumatismos dentários, a prevenção
          e tratamentos das doenças bucais, como cárie e doença periodontal,
          onde estão incluídos procedimentos restauradores e os tratamentos de
          canais, as extrações e etc.
        </p>
      </Accordion.Content>

      {/* HOF (Harmonização Orofacial) */}
      <Accordion.Title
        active={selectedAccordion === 8}
        index={8}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        HOF (Harmonização Orofacial)
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 8}>
        <p>
          A HOF consiste em uma série de procedimentos que visam melhorar as
          proporções faciais, promovendo maior simetria, reduzindo os sinais de
          envelhecimento e valorizando pontos específicos.
        </p>
      </Accordion.Content>

        
  {/* Diagnóstico Digital */}
  <Accordion.Title
        active={selectedAccordion === 9}
        index={9}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Diagnóstico Digital
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 9}>
        <p>
          Na odontologia, usamos o diagnóstico digital em praticamente todas as
          especialidades. Trata-se de um exame radiográfico utilizando um raio-X,
          no qual verificamos estruturas ósseas da mandíbula, maxila,
          articulações e principalmente todos os dentes, inclusive dentes que
          ainda não nasceram. Na OIP, temos um equipamento capaz de revelar
          digitalmente as radiografias dos nossos pacientes, facilitando todo o
          processo e principalmente melhorando a qualidade da nossa imagem para
          um melhor diagnóstico.
        </p>
        {/* Imagens do Sopro, Raio-X e periapical */}
        {/* Coloque aqui as imagens relevantes */}
      </Accordion.Content>

      {/* Manutenção Preventiva */}
      <Accordion.Title
        active={selectedAccordion === 10}
        index={10}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Manutenção Preventiva
      </Accordion.Title>
      <Accordion.Content active={selectedAccordion === 10}>
        <p>
          Nessa área, visamos a manutenção da saúde e qualidade de vida dos
          nossos pacientes. Devemos identificar e prevenir doenças orais antes
          que elas se tornem um fator de risco para a saúde bucal. Ter uma boa
          higiene bucal e fazer visitas regulares ao dentista é fundamental para
          manter a saúde da boca em dia.
        </p>
      </Accordion.Content>

        </Accordion>

        </Segment>
    )
}

export default EspecialidadesAccordion;