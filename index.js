const bcrypt = require('bcrypt');

const hashedPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, salt);
  console.log(`this is pw before hash ${pw}`);
  console.log(salt);
  console.log(hash);
};

hashedPassword('monkey');
