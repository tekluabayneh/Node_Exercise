const path = require("path");

// Get the base name of a file
const base = path.basename("/foo/bar/baz/asdf/quux.html");
console.log(base); // Output: quux.html


// Get the base name without the file extension
const baseWithoutExt = path.basename("/foo/bar/baz/asdf/quux.html", ".html");
console.log(baseWithoutExt); // Output: quux

// Get the directory name of a path
const dir = path.dirname("/foo/bar/baz/asdf/quux.html");
console.log(dir); // Output: /foo/bar/baz/asdf

// Join multiple path segments
const joinedPath = path.join("/foo", "bar", "baz/asdf", "quux", "..");
console.log(joinedPath); // Output: /foo/bar/baz/asdf

// Resolve multiple path segments into an absolute path
const resolvedPath = path.resolve(
  "foo/bar",
  "/tmp/file/",
  "..",
  "a/../subfile"
);
console.log(resolvedPath); // Output: /tmp/subfile

// Parse a given path into its components
const parsedPath = path.parse("/home/user/dir/file.txt");
console.log(parsedPath);
