// %s   String
// %d   Numero
// %j   json
// console.log("Un %s y un %s", "perro", "gato");

// console.info("Bien");
// console.warn("Error");

// console.assert(42 == "42");
// console.assert(42 === "42");

// console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("segundo");

debuglog("Saludo desde segundo");