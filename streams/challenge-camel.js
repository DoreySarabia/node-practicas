//primer letra en mayúscula y no tener espacio entre palabras 
const {Transform} = require('stream');

const transformStream = new Transform({
    transform(chunk, enconding, callback){
//Llega un string 
        const Camel = chunk.toString().toLowerCase().trim();
//CamelCase
        let camelCase = '';
        for (let i = 0; i < Camel.length; i++) {
          if (Camel[i] === ' ') {
//Para mayusculas
            camelCase += Camel[i + 1].toUpperCase();
            i++;
          } else {
            camelCase += Camel[i]
          }
        }
        this.push(camelCase);
        callback();
      }
    });
//Leer el proceso
process.stdin.pipe(transformStream).pipe(process.stdout);