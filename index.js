const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Nacho',
    titulo: 'Curso de node',
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Nacho',
    titulo: 'Curso de node',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Nacho',
    titulo: 'Curso de node',
  });
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port);
