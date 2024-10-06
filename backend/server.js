const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/mibasededatos', { useNewUrlParser: true, useUnifiedTopology: true });


const ContactoSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
});

const Contacto = mongoose.model('Contacto', ContactoSchema);

app.post('/contacto', async (req, res) => {
  const { nombre, email, telefono } = req.body;
  const nuevoContacto = new Contacto({ nombre, email, telefono });
  await nuevoContacto.save();
  res.status(201).send('Contacto guardado');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
