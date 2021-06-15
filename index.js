const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/authDemo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect('/');
});

app.get('/secret', (req, res) => {
  res.send(
    'This is Secret shhhhh!!! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN'
  );
});

app.listen('8080', () => {
  console.log('Currently listening to port 8080');
});
