const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username can NOT be blank'],
  },
  password: {
    type: String,
    required: [true, 'Password can NOT be blank'],
  },
});

module.exports = mongoose.model('User', userSchema);
