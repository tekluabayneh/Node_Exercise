// Import the 'fs' module for file system operations
const fs = require("fs");

// Import functions and instance from 'myFirstnode.js'
const { addnum, fuc, Add, addmynum, myass, demo } = require("./myFirstnode");

// Import an instance from 'abebe.js'
const nameIwanttoCAll_one = require("./abebe");

// Delete the cached module to force reloading
delete require.cache[require.resolve("./abebe")];
const nameIwanttoCAll = require("./abebe");
const { isUtf8 } = require("buffer");
// Re-import the module after deleting it

// Using the imported functions
const sum = addnum(2, 5);
console.log("Hello Teklu, How are you doing?", sum); // Output: Hello Teklu, How are you doing? 7

const resultFuc = fuc(2, 2);
console.log("Teklu's age is", resultFuc); // Output: Teklu's age is 4

const resultAdd = Add.result(2, 2);
console.log("Teklu's age is", resultAdd); // Output: Teklu's age is 4

const mynmu = addmynum(2, 4, 5);
console.log(
  "This is my number and my favorite number will be here, so check it out",
  mynmu
);

////////////
const myassone_one = new myass("Teklu", 23, "Male");
const myassone_tow = new myass("Martha", 33, "Femal");
console.log(myassone_one);
console.log(myassone_tow);
console.log(demo());

// fs.readFile("./text.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw new error("the dtatg is not here man");
//   } else {
//     console.log(data);
//   }
// });

// console.log(__dirname);
// console.log(__filename);
// console.log(nameIwanttoCAll.go); // we can also acces it like this
// console.log(nameIwanttoCAll.go2); // we can also acces it like this
