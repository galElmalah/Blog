module.exports.user = `
    CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80),
    password TEXT,
    createdAt TIMESTAMP,
    UNIQUE (username)
  );
`;

module.exports.posts = `
    CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    body TEXT,
    title VARCHAR(80),
    author VARCHAR(80),
    tags VARCHAR(20)[],
    dateCreated TIMESTAMP
    );
`;
