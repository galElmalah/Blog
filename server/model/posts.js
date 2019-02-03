const { db } = require('./index');

const postsTable = async () => {
  try {
    await db.query(`
    CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    body TEXT,
    title VARCHAR(80),
    author VARCHAR(80),
    tags VARCHAR(20)[],
    dateCreated TIMESTAMP
  );`);
    console.log('Posts table created');
  } catch (err) {
    console.log(err);
  }
};
module.exports = class Posts {
  static async getAll() {
    // SELECT * FROM posts;
    // await db.query(`DROP TABLE Posts`);
    // await postsTable();
    return db.query(`SELECT * FROM Posts;`);
  }

  static createPost({ author, body, title, tags = [] }) {
    const query = {
      text: `INSERT INTO Posts(author, body, title, tags)  
              VALUES($1, $2, $3, $4)
              RETURNING id, author, body, title, tags`,
      values: [author, body, title, tags],
    };
    return db.query(query);
  }

  static getPostById({ postId }) {
    const query = {
      text: `SELECT * FROM Posts WHERE id = $1;`,
      values: [postId],
    };
    return db.query(query);
  }
  static updatePostById({ postId, body, title, tags }) {
    const query = {
      text: `UPDATE Posts
              SET body = $2, title = $3, tags = $4
              WHERE id = $1
              RETURNING *;`,
      values: [postId, body, title, tags],
    };
    return db.query(query);
  }
  static deletePostById({ postId }) {
    const query = {
      text: `DELETE FROM Posts WHERE id = $1;`,
      values: [postId],
    };
    return db.query(query);
  }
};
