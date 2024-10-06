import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DetallePropiedad from './paginas/DetallePropiedad';
import AcercaDe from './paginas/AcercaDe'; 
import { Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Helmet>
        <title>Venta Casa Garzota, Guayaquil</title>
        <meta name="description" content="Venta de casa en Garzota, Guayaquil." />
      </Helmet>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Portal Inmobiliario de Guayaquil</h1>
      
      <nav className="navbar">
        <Link to="/propiedades/1" className="nav-link">
          <button className="btn-ver-casa">Ver Casa en la Garzota</button>
        </Link>
        <Link to="/acerca-de" className="nav-link">
          <button className="btn-acerca-de">Acerca de</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/propiedades/1" element={<DetallePropiedad />} />
        <Route path="/acerca-de" element={<AcercaDe />} /> 
      </Routes>
    </Router>
  );
}

export default App;

