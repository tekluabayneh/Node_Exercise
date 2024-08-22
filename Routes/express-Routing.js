const express = require("express");
const path = require("path");
const app = express();
// using middle ware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/course", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "course.html"));
});



app.get("/gomez", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "gomez.html"));
});

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    if (err) {
      res.status(404).send({ msg: "pa=ge Not Found" });
      return;
    } else {
      res.setHeader("Content-type", "plain/html");
      res.status(200).send(data);
    }
  });
});
