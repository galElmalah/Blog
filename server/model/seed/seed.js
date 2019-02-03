const { connect, db } = require('../index');
const tableQueries = require('./createTablesQueries');

const dropAllTables = `
BEGIN;
DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Comments;
COMMIT;
`;

const tableCreatedLog = tableName => console.log(`${tableName} table created!`);

(async function seedDB() {
  await connect();
  console.log('db connected');

  await db.query(dropAllTables);
  console.log('droped all tables');

  await db.query(tableQueries.posts);
  tableCreatedLog('posts');
  await db.query(tableQueries.user);
  tableCreatedLog('users');
  await db.query(tableQueries.comments);
  tableCreatedLog('comments');
})();
