function go() {
  return "Hello World";
}
function go2() {
  return "Hello World2";
}
function go3() {
  return "Hello World3";
}

module.exports.go = go;
module.exports.go2 = go2;
module.exports.go3 = go3;
console.log(module);

console.log(__dirname)
console.log(__filename)