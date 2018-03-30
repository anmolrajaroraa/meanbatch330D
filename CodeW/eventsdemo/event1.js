// Require
const event = require("events");
// Object
const eventEmitter = new event.EventEmitter();

// Register Event
eventEmitter.on("open",()=>{
    console.log("Open Event Fire....");
})
eventEmitter.on("close",()=>{
    console.log("Close Event Fire....");

})

// Call Event / Fire Event
eventEmitter.emit("open");
eventEmitter.emit("close");