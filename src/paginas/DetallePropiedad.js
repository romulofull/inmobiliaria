import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../index.css'; // Estilos opcionales
import img1 from '../gallery/1.jpg';
import img2 from '../gallery/2.jpg';
import img3 from '../gallery/3.jpeg';
import img4 from '../gallery/4.jpg';
import img5 from '../gallery/5.jpg';
import img6 from '../gallery/6.jpg';
import img7 from '../gallery/7.jpeg';
import img8 from '../gallery/8.jpeg';
import img9 from '../gallery/9.jpg';
import img10 from '../gallery/10.jpg';

const DetallePropiedad = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contacto', { nombre, email, telefono });
      alert('Gracias, nos pondremos en contacto contigo pronto.');
      setNombre('');
      setEmail('');
      setTelefono('');
      setError('');
    } catch (error) {
      setError('Error al enviar la información, intenta nuevamente.');
      console.error('Error al enviar la información', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Casa en Garzota, Guayaquil</title>
        <meta name="description" content="Casa en venta en Garzota, Guayaquil." />
      </Helmet>
      <h2>Casa en Garzota, Guayaquil</h2>
      
      <div className="gallery">
        <img src={img1} alt="Casa en Garzota 1" />
        <img src={img2} alt="Casa en Garzota 2" />
        <img src={img3} alt="Casa en Garzota 3" />
        <img src={img4} alt="Casa en Garzota 4" />
        <img src={img5} alt="Casa en Garzota 5" />
        <img src={img6} alt="Casa en Garzota 6" />
        <img src={img7} alt="Casa en Garzota 7" />
        <img src={img8} alt="Casa en Garzota 8" />
        <img src={img9} alt="Casa en Garzota 9" />
        <img src={img10} alt="Casa en Garzota 10" />
      </div>

      <h2>Descripción de la Propiedad</h2>
      <p>Esta casa de 210 metros cuadrados está disponible para la venta, ideal para uso comercial. Ubicada en una zona estratégica, combina comodidad y versatilidad, perfecta para emprendedores que buscan establecer su negocio.</p>
      <ul>
        <li><strong>Número de habitaciones:</strong> 3 Habitaciones</li>
        <li><strong>Espacio exterior:</strong> Patio, jardín, balcón, área de lavandería, cisterna</li>
        <li><strong>Estacionamiento:</strong> Garage para 1 carro dentro de casa. Tambien se puede parquear afuera</li>
        <li><strong>Servicios cercanos:</strong> Transporte público, restaurantes, escuelas, supermercados, etc.</li>
        <li><strong>Versatilidad de uso:</strong> Ideal para oficinas, consultorios o tiendas.</li>
        <li><strong>Potencial de inversión:</strong> Oportunidad para generar ingresos a través del alquiler o desarrollo de negocios.</li>
      </ul>

      <h3>Contacto</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DetallePropiedad;
