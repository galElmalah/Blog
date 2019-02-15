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

  // should be a part of a middleware or a route definitly not in the db class
  static async validateCredentials({ username, password }) {
    const query = {
      text: `SELECT 
                username, password 
             FROM 
                Users
             WHERE 
                username = $1;`,
      values: [username],
    };
    const {
      rows: [user],
    } = await db.query(query);
    if (!user) {
      return false;
    }
    return Password.compare({ password, compareTo: user.password });
  }
};
