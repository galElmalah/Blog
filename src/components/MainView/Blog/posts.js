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

export const getPosts = () =>
  new Promise(resolve => setTimeout(() => resolve(posts(Math.random())), 3000));
