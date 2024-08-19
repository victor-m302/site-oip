// EspecialidadeProvider.jsx

import React, { createContext, useState } from 'react';

// Crie um contexto para compartilhar o estado entre os componentes
export const EspecialidadesContext = createContext();

const EspecialidadesProvider = ({ children }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  // Lógica para atualizar o estado quando um Accordion for pressionado
  const handleAccordionClick = (index) => {
    setSelectedAccordion(index);
  };

  return (
    <EspecialidadesContext.Provider value={{ selectedAccordion, handleAccordionClick }}>
      {children}
    </EspecialidadesContext.Provider>
  );
};

export default EspecialidadesProvider;
