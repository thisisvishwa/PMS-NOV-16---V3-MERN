```javascript
const speakeasy = require('speakeasy');
const User = require('../models/User');

const setupMFA = async (userId) => {
  const secret = speakeasy.generateSecret({ length: 20 });
  await User.findByIdAndUpdate(userId, { mfa: secret.base32 });
  return secret.otpauth_url;
};

const verifyMFA = async (userId, token) => {
  const user = await User.findById(userId);
  const verified = speakeasy.totp.verify({
    secret: user.mfa,
    encoding: 'base32',
    token: token,
  });
  return verified;
};

module.exports = {
  setupMFA,
  verifyMFA,
};
```