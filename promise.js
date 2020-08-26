//Crear la promesa 
const promise = new Promise((resolve, reject) => {
    //para ser asincrono 
        setTimeout(() => {
    //crear funcion random para 50/50
            if (Math.random() < 0.5){
    //No enviar el error 
                resolve("Hello world"); 
            }else{
    //Enviar el error
                reject(new Error("Hello error")); 
            }
    //2 seg expresado en milisegundos
        }, 2000);  
    });


    promise 
//Encadenamiento en mayúsculas
    .then(msg => msg.toUpperCase())
    .then(msg => console.log ("message", msg))
    .catch(err => console.log("error", err)); 