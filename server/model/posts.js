const { db } = require('./index');

module.exports = class Posts {
  static async getAll() {
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
