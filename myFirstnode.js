// Function to add two numbers

const addnum = (a, b) => {
  return a + b;
};

// Another function to add two numbers
function fuc(a, b) {
  return a + b;
}

// Class with a method to add two numbers
function Add() {
  this.result = (a, b) => {
    return a + b;
  };
}
// module.exports = ADd

const addmynum = (a, b, c) => {
  return a + b * c;
};
// module.exports = addmynum
const myass = class {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    return this.name + this.age + this.gender;
  }
};
/////////////////////////////////////////////////////////////
const youcan = class{
constructor(name,age,gen){
  this.name = name;
  this.age = age;
  this.gen = gen
}
}
module.exports.youcan = youcan
module.exports = {
  youcan:youcan,
}
////////////////////////////////////////////////////////////
module.exports = function () {
  return "Hello Coder";
};

// Exporting all as properties of an object
module.exports = {
  addnum,
  fuc,
  Add: new Add(), // Exporting an instance of Add
  addmynum,
  myass: myass,
  demo: function () {
    return "Hello Coder";
  }, // we can also do it like this
  demo2: function () {
    return "Hello Coder2";
  },
};

// (function () {
//   console.log("I am an IIFE");
//   var IIFE = 90;

//   function child() {
//     console.log("I am a child function", IIFE);
//   }
//   return child;
// })()(function addme(A, b) {
//   var aavar = 5;
//   function adyou(e, r) {
//     var a = 90;
//     console.log(aavar);
//   }
//   return adyou();
// })();

/////////////////////////////////////
// how to create file  ussing node 
// how do i  use http 
// http module 
// core module

