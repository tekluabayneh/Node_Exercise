const http = require("http");
const url = require("url");
const fs = require("fs");
const { resolveNaptr } = require("dns");
const mimetypelookup = require("mime-types").lookup;
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let filePath = parsedUrl.pathname;

  if (filePath === "/") {
    filePath = "/index.html";
  } else if (filePath === "/login") {
    filePath = "/login.html";
  } else {
    filePath = "." + filePath;
  }

  let requestedFile = __dirname + "/public/" + filePath;

  fs.readFile(requestedFile, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - File Not Found");
    } else {
      let mime = mimetypelookup(filePath) || "application/octet-stream";
      res.writeHead(200, { "Content-Type": mime });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

// server.close();
