const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/lessons", (req, res) => {
  res.send(lessons);
});

app.post("/lessons", (req, res) => {
  const newLesson = req.body;
  lessons.push(newLesson);
  res.send(lessons);
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

const lessons = [
  {
    title: "Lesson 1",
    description: "This is lesson 1",
  },
  {
    title: "Lesson 2",
    description: "This is lesson 2",
  },
  {
    title: "Lesson 3",
    description: "This is lesson 3",
  },
];
