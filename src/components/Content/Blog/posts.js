const posts = [
  {
    tags: ["tdd", "javascript"],
    title: "example",
    imageUrl: "/me.jpg",
    id: "1"
  },
  { tags: [], title: "example", imageUrl: "/test.jpg", id: "2" },
  {
    tags: ["tdd", "javascript"],
    title: "example",
    imageUrl: "/test.jpg",
    id: "3"
  },
  {
    tags: ["tdd", "javascript", "react", "ES6"],
    title: "example",
    imageUrl: "/me.jpg",
    id: "4"
  }
];

export const getPosts = cb => setTimeout(() => cb(posts), 3000);
