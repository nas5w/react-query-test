var express = require("express");
var cors = require("cors");
var app = express();

const port = 3333;

app.use(cors());

const posts = [
  { id: 1, title: "Hello world" },
  { id: 2, title: "Foo Bar" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/post/admin", (req, res) => {
  res.status(401).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function addPost() {
  const id = Math.max(...posts.map(({ id }) => id)) + 1;
  posts.push({ id, title: `Post number ${id}` });
}
