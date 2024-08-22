const EventEmitter = require("events"); // Import the EventEmitter class from the 'events' module
const myEmitter = new EventEmitter(); // Create a new instance of EventEmitter

// Register a listener for the 'greet' event
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`); // This function will be called when the 'greet' event is emitted
});
// Emit the 'greet' event and pass 'Alice' as an argument
myEmitter.emit("greet", "Alice"); // Output: Hello, Alice!
 
// Register a listener for the 'error' event
myEmitter.on("error", (err) => {
  console.error(`Error occurred: ${err.message}`); // This function will be called when the 'error' event is emitted
});

// Emit the 'error' event and pass an Error object as an argument
myEmitter.emit("error", new Error("Something went wrong")); // Output: Error occurred: Something went wrong

//////////////////////////////////////////////
myEmitter.emit("event");
/////////////////////
myEmitter.once("event", () => {
  console.log("This happens only once");
});

//////////////////////////////
const callback = () => {
  console.log("Listener to be removed");
};
myEmitter.removeListener("event1", callback);
myEmitter.on("event1", callback);
///////////////////////////////////////////

