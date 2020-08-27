const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const consoleFile = new console.Console(out, err);

setInterval(() => {
    //imprimir fecha actual
    consoleFile.log(new Date());
    //imprimir un error
    consoleFile.error(new Error("ERROR"));
}, 2000);