
import React from 'react';

import logo from '../gallery/11.png'; 

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <h2>Acerca de Nosotros</h2>
      <img src={logo} alt="Logo" className="logo" style={{ width: '150px', height: 'auto' }} /> 
      <p>Síguenos en nuestras redes sociales</p>
    </div>
  );
};

export default AcercaDe;
