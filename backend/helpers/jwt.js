const jwt = require('jsonwebtoken');
const fs = require('fs');
const ENV = require('@configs/environment');

const privateKey = fs.readFileSync(`${process.cwd()}/secret/tokenPrivateKey.pem`);
const publicKey = fs.readFileSync(`${process.cwd()}/secret/tokenPublicKey.pem`);

function refactorPayload(payload) {
  if (typeof (payload) !== 'object') {
    return '';
  }
  return {
    userName: payload.userName,
    email: payload.email,
    iss: ENV.JWT.issuer,
  };
}

module.exports = {
  generateToken: (payload) => {
    const payloadRefactor = refactorPayload(payload);
    return jwt.sign(payloadRefactor, privateKey, {
      algorithm: 'RS256',
      expiresIn: ENV.JWT.expiresIn, // 1d
      // expiresIn: '1s',
    });
  },

  verifyToken: (token) => jwt.verify(token, publicKey, {
    algorithm: 'RS256',
    issuer: ENV.JWT.issuer,
  }, (error, decoded) => {
    if (error) {
      if (error.name && error.name === 'TokenExpiredError') {
        return jwt.verify(token, publicKey, {
          algorithm: 'RS256',
          issuer: ENV.JWT.issuer,
          clockTolerance: ENV.JWT.clockTolerance,
        }, (err, decoded2) => {
          if (err) return false;
          return { ...decoded2, isTokenExpired: true };
        });
      }
      return false;
    }
    return decoded;
  })
  ,
};
