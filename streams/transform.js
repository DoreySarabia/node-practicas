//Desde la libreria
const {Transform} = require('stream');
//Sintaxis similar a duplex pero más corta 
const transformStream = new Transform({
    transform(chunk, enconding, callback){
    //Pasar a mayusculas el string que recibe 
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
//Leer el proceso
process.stdin.pipe(transformStream).pipe(process.stdout);