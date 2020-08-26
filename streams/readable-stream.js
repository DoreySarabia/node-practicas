  
const { Readable } = require('stream');
//Instancia readable 
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("prueba, prueba"));
readableStream.push(null);
//Llamar a consola 
readableStream.pipe(process.stdout);