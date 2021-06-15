const express = require('express');
const app = express();
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/secret', (req, res) => {
  res.send(
    'This is Secret shhhhh!!! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN'
  );
});

app.listen('8080', () => {
  console.log('Currently listening to port 8080');
});
