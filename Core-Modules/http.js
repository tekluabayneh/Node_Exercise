// Import http module: const http = require('http');
// Create a server: http.createServer((req, res) => { ... })
// Listen on a port: server.listen(port, () => { ... })
// Handle routes: Check req.url for different paths.
// Handle HTTP methods: Check req.method for different HTTP methods.
// Import the 'http' module to use for creating an HTTP server and making HTTP requests.
const { error } = require("console");
const { rmSync, copyFileSync } = require("fs");
const http = require("http");

// Create an HTTP server that responds with "Hello World" for any request.
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set the HTTP status code to 200 (OK).
    res.setHeader("Content-Type", "text/html"); // Set the content type of the response to plain text.
    res.end(`<body style="font-family: Arial, sans-serif; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
    <div style="max-width: 400px; width: 100%; background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="text-align: center; margin-bottom: 20px;">Login</h1>
        <form action="/login" method="POST">
            <div style="margin-bottom: 15px;">
                <label for="username" style="display: block; margin-bottom: 5px;">Username</label>
                <input type="text" id="username" name="username" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label for="password" style="display: block; margin-bottom: 5px;">Password</label>
                <input type="password" id="password" name="password" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <button type="submit" style="width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Login</button>
        </form>
    </div>
</body>`);
  
  // Send the response body and end the response.
});
// Make the server listen on port 3000 and IP address 127.0.0.1, and log a message when it's running.
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// Make an HTTP GET request to the local server running at "http://127.0.0.1:3000/".
http
  .get("http://127.0.0.1:3000/", (res) => {
    let data = "";

    // Accumulate chunks of data from the response.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // Log the complete response when all chunks have been received.
    res.on("end", () => {
      console.log("Response: " + data);
    });
  })
  // Handle any errors that occur during the request.
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });

/////////////////////////////////////////////////

// Define options for an HTTP request to "www.example.com".
const options = {
  hostname: "www.example.com", // The server to request.
  port: 80, // The port on the server to connect to (default for HTTP).
  path: "/", // The path on the server to request.
  method: "GET", // The HTTP method to use.
};

// Make an HTTP request using the defined options.
const req = http.request(options, (res) => {
  let data = "";

  // Accumulate chunks of data from the response.
  res.on("data", (chunk) => {
    data += chunk;
  });

  // Log the complete response when all chunks have been received.
  res.on("end", () => {
    console.log("Response: " + data);
  });
});

// Handle any errors that occur during the request.
req.on("error", (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// End the request.
req.end();

//////////////////////////////////////////////////////////////////

// Handle incoming requests to the server by logging request details.
server.on("request", (req, res) => {
  console.log("Request method:", req.method); // Log the HTTP method of the request.
  console.log("Request URL:", req.url); // Log the URL of the request.
  console.log("Request headers:", req.headers); // Log the headers of the request.
});

///////////////////////////////////////////////////////////

// Handle response events on a request object.
req.on("response", (res) => {
  console.log("Response status code:", res.statusCode); // Log the status code of the response.
  res.on("data", (chunk) => {
    console.log("Response body chunk:", chunk.toString()); // Log each chunk of the response body.
  });
});
//////////////////////////////////////////

// Create an HTTP server that responds with "Hello World" for any request.
server.on("request", (req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK).
  res.setHeader("Content-Type", "text/plain"); // Set the content type of the response to plain text.
  res.end("Hello World\n"); // Send the response body and end the response.
});
//////////////////////////////////////
