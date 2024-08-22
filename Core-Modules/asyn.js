// Callback example
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promise example
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFilePromise("example.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Async/Await example
const readFileAsync = async (file) => {
  try {
    const data = await readFilePromise(file);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFileAsync("example.txt");
