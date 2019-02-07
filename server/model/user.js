const { db } = require('./index');
const Password = require('../services/security');

module.exports = class Users {
  static async isUserNameExists(username) {
    const query = {
      text: `SELECT * FROM Users
              WHERE username = $1`,
      values: [username],
    };
    const result = await db.query(query);
    console.log(result, username);
    return result.rowCount !== 0;
  }

  static async createUser({ username, password }) {
    const query = {
      text: `INSERT INTO Users(username, password)
                VALUES($1, $2)
                RETURNING id`,
      values: [username, password],
    };
    const user = await db.query(query);

    return user;
  }

  static async validateCredentials({ username, password }) {
    const query = {
      text: `SELECT username, password from Users
              WHERE username = $1;`,
      values: [username],
    };
    const user = await db.query(query);
    Password.compare({ password, compareTo: user.password });
  }
};
