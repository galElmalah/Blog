module.exports.user = `
    CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80),
    password TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_DATE,
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
    createdAt TIMESTAMP DEFAULT CURRENT_DATE
    );
`;

module.exports.comments = `
    CREATE TABLE Comments (
        id SERIAL PRIMARY KEY,
        body TEXT,
        upvotes NUMERIC DEFAULT 0,
        createdAt TIMESTAMP DEFAULT CURRENT_DATE,
        userId INTEGER, 
        postId INTEGER,
        CHECK (upvotes < 1000 AND upvotes >= 0),
        FOREIGN KEY (userId) REFERENCES Users (id),
        FOREIGN KEY (postId) REFERENCES Posts (id)
    );
`;
