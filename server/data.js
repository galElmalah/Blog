module.exports = {
  posts: rand => [
    {
      tags: ["tdd", "javascript"],
      title: "Tdd",
      imageUrl: "/me.jpg",
      id: "1" + rand
    },
    {
      tags: [],
      title: "ES6 async/await",
      imageUrl: "/test.jpg",
      id: "2" + rand
    },
    {
      tags: ["tdd", "javascript"],
      title: "the event loop",
      imageUrl: "/test.jpg",
      id: "3" + rand
    },
    {
      tags: ["tdd", "javascript", "react", "ES6"],
      title: "naming conventions",
      imageUrl: "/me.jpg",
      id: "4" + rand
    }
  ]
};
