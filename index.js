const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;
app.use(express.static('public'));
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');


//respond with "hello world" when a GET request is made to the homepage
app.get('*',(req,res)=>{
  res.sendFile(__dirname + '/public/index.html')
})


app.listen(port , () => {

  console.log(`escuchando por el puerto ${port}`)
})

