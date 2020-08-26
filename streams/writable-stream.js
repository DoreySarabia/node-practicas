//leer e imprimir datos 
const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
//funcionalidad natica para leer los datos 
process.stdin.pipe(writableStream);