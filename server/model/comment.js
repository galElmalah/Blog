const { db } = require('./index');
module.exports = class Comments {
  static async getPostComments({ postId }) {
    const query = {
      text: `SELECT 
                body, p.createdAt, username, upvotes 
            FROM 
                Comments p, Users u 
            WHERE 
                p.postId = $1 AND p.userId = u.id;`,
      values: [postId],
    };
    return db.query(query);
  }

  static async createComment({ postId, userId, body }) {
    const query = {
      text: `INSERT INTO 
                Comments(postId, userId, body)
                VALUES($1, $2, $3)
                RETURNING *`,
      values: [postId, userId, body],
    };
    return db.query(query);
  }

  static async deleteComment({ postId, userId, commentId }) {
    const query = {
      text: `DELETE FROM 
                Comments
              WHERE 
                postId = $1 
              AND
                userId = $2 
              AND
                id = $3;
                `,
      values: [postId, userId, commentId],
    };
    return db.query(query);
  }

  static async upvoteComment({ commentId }) {
    const query = {
      text: `UPDATE 
                Comments
             SET 
                upvotes = upvotes + 1
             WHERE 
                  id = $1 
            RETURNING *;`,
      values: [commentId],
    };
    return db.query(query);
  }

  static async downvoteComment({ commentId }) {
    const query = {
      text: `UPDATE 
                Comments
             SET 
                upvotes = upvotes - 1
             WHERE 
                  id = $1 
            RETURNING *;`,
      values: [commentId],
    };
    return db.query(query);
  }
};
