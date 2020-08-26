//Crear un emitter a través de un módulo
const EventEmmiter = require('events'); 
//Crear logger propio 
class Logger extends EventEmmiter {
    execute(cb){
        console.log('Before'); 
        this.emit('start'); 
        cb(); 
        this.emit('finish'); 
        console.log('After'); 
    }
}

const logger =new Logger(); 

logger.on("start", () => console.log('Starting')); 
logger.on("finish", () => console.log("Finishing")); 
logger.on("finish", () => console.log("It´s Done ")); 

//logger.execute( () => console.log("Hello world")); 
//Asíncrono
logger.execute( () => setTimeout( () => console.log('Hello world'), 500)); 