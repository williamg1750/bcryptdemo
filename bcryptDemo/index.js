const bcrypt = require('bcrypt');

// const hashedPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(`this is pw before hash ${pw}`);
//   console.log(salt);
//   console.log(hash);
// };

const hashedPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(`this is pw before hash ${pw}`);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPass) => {
  const result = await bcrypt.compare(pw, hashedPass);
  if (result) {
    console.log('LOGGED IN with correct password');
  } else {
    console.log('INCORRECT PASSWORD');
  }
};

// hashedPassword('monkey');

// $2b$12$8ASxUnvyKBI00KUyyPhONeesbR5LTdh.nJLUL5qVfWcmWMb5y.ZKi;
login('monkey', '$2b$12$8ASxUnvyKBI00KUyyPhONeesbR5LTdh.nJLUL5qVfWcmWMb5y.ZKi');
