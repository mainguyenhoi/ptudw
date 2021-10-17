module.exports = {
  port: process.env.PORT || 8080,
  bcrypt: {
    salt: 10,
    secret: 'secret',

  },
  JWT: {
    secret: 'secret',
    issuer: 'issuer',
    expiresIn: '1d',
  },
  WINSTON: true,

};
