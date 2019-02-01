const { connect, db } = require('../index');

const dropAllTables = `
BEGIN;
DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Comments;
COMMIT;
`;

const tableCreatedLog = tableName =>
  console.log(`${tableName} table created!`)(async function seedDB() {
    await connect();
    console.log('db connected');

    await db.query(dropAllTables);
    console.log('droped all tables');

    await db.query(`
    CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    body TEXT,
    title VARCHAR(80),
    author VARCHAR(80),
    tags VARCHAR(20)[],
    dateCreated TIMESTAMP
    );`);
    tableCreatedLog('posts');
    await db.query(`
    CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80),
    password TEXT,
    createdAt TIMESTAMP,
    UNIQUE (username)
  );`);
    tableCreatedLog('users');
  })();
