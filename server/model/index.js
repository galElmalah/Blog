const pg = require('pg');
const db = new pg.Client({ database: 'blog' });

const connect = () => {
  return new Promise((resolve, reject) => {
    db.connect((err, client) => {
      if (err) reject(err);
      resolve(client);
    });
  });
};
module.exports = { db, connect };
