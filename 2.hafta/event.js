const Emitter = require("events");

const emitter = new Emitter();

emitter.on("event", (data, second) => {
  console.log(data);
  console.log(second);
});

emitter.emit("event", "data", "second");

emitter.removeAllListeners("event");