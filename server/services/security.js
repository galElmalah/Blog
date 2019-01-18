const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = class Passwords {
  static async hash(password) {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  }

  static compare({ password, compareTo }) {
    return bcrypt.compare(password, compareTo);
  }
};
