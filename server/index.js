const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const posts = rand => [
  {
    tags: ["tdd", "javascript"],
    title: "example",
    imageUrl: "/me.jpg",
    id: "1" + rand
  },
  { tags: [], title: "example", imageUrl: "/test.jpg", id: "2" + rand },
  {
    tags: ["tdd", "javascript"],
    title: "example",
    imageUrl: "/test.jpg",
    id: "3" + rand
  },
  {
    tags: ["tdd", "javascript", "react", "ES6"],
    title: "example",
    imageUrl: "/me.jpg",
    id: "4" + rand
  }
];
app.get("/posts", (req, res) => {
  console.log("reviced req for posts");
  res.send(posts(Math.random()));
});

app.listen(3001, () => console.log(`server ${3001} listening on port ${3001}`));
