import React, { useContext } from 'react';
import { EspecialidadesContext } from './EspecialidadesProvider';

const EspecialidadesImage = () => {
  const { selectedAccordion } = useContext(EspecialidadeContext);

  // Mapeie o índice do Accordion para a imagem correspondente
  const images = ['imagem1.png', 'imagem2.png', 'imagem3.png'];

  return (
    <div>
      {/* Exiba a imagem com base no Accordion selecionado */}
      {selectedAccordion !== null && <img src={images[selectedAccordion]} alt="Imagem Especialidade" />}
    </div>
  );
};

export default EspecialidadesImage;
