export default class Posts {
  static getAll() {
    // SELECT * FROM posts;
  }
  static createPost({ name, author, createdAt, body, title, tags }) {
    // INSERT INTO posts (name, author, createdAt, body, title, tags)
  }
  static getById({ postId }) {
    // SELECT * FROM Posts WHERE id = id
  }
  static updatePostById() {}
  static deletePostById({ postId }) {
    // DELETE FROM Posts where id = postId
  }
}
