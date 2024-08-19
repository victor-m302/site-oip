import React, { useContext } from 'react';
import { EspecialidadesContext } from './EspecialidadesProvider';

const EspecialidadesImage = () => {
  const { selectedAccordion } = useContext(EspecialidadesContext);

  // Mapeie o índice do Accordion para a imagem correspondente
  const images = [
    'especialidades/image1.png',
    'especialidades/image2.png',
    'especialidades/image3.png',
    'especialidades/image4.png',
    'especialidades/image5.png',
    'especialidades/image6.png',
    'especialidades/image7.png',
    'especialidades/image8.png',
    'especialidades/image9.png',
    'especialidades/image10.png',
    'especialidades/image11.png'
    ];

  return (
    <div>
      {/* Exiba a imagem com base no Accordion selecionado */}
      {selectedAccordion !== null && <img src={images[selectedAccordion]} alt="Imagem Especialidade" />}
    </div>
  );
};

export default EspecialidadesImage;
