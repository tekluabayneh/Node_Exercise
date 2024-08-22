const express = require("express");
const app = express();

app.get("/", (err, res) => {
  res.send("Hello World");
  //   res.end("Hello World");
  //   console.log(res.end())
});

// Example API route
app.get("/api/data", (req, res) => {
  // Simulate a database query
  const data = { message: "Hello, world!" };
  res.json(data);
});

// Serve the index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

// Start the server on port 80
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(express.static("../public/"));

// app.listen(3000, () => {
//   console.log("server is listning at 3000");
// });
