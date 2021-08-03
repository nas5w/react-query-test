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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
