const os = require("os");

console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("CPUs:", os.cpus());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Uptime (seconds):", os.uptime());
console.log("Hostname:", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("User Info:", os.userInfo());
