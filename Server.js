const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const posts = require("./Routes/posts");
const logermiddelware = require("./middelware/logermiddelware");
const { resolvePtr } = require("dns");
const mimetypelookup = require("mime-types").lookup();
// const PORT = process.env.PORT || 80
const PORT = 3000;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public-Express")));

app.get("/index", (req, res) => {
  res.status(200).send(path.join(__dirname + "public", "login.html"));
});

app.use(express.static( "./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//// logermiddelware
app.use(logermiddelware);

app.use("/api/posts", posts);

// Global Error Handler (must be the last middleware)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    // You can add more error details here if needed
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
