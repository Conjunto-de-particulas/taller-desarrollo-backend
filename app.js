const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const ruta_taller1 = require('./rutas/ruta_taller1');
app.use('/api/taller1', ruta_taller1);

const ruta_taller2 = require('./rutas/ruta_taller2');
app.use('/api/taller2', ruta_taller2);

app.get('/', (req, res) => {
  res.send('Backend working');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});