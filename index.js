const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;
app.use(express.static('public'));
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');


//respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('home', {
    titulo: 'Topicos Avanzados',
    nombre: 'prueba nombre'
  });
});

app.get('/generic', function(req, res) {
  res.render('generic', {
    titulo: 'Topicos Avanzados',
    nombre: 'Generic'
  });
});

app.get('/elements', function(req, res) {
  res.render('elements', {
    titulo: 'Topicos Avanzados',
    nombre: 'Elements'
  });
});



app.listen(port , () => {

  console.log(`escuchando por el puerto ${port}`)
})

