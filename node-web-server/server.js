const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/about', (request, respose) => {
  respose.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/', (request, respose) => {
  respose.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMsg: 'Welcome to my node.js website!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (request, respose) => {
  respose.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
