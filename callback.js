//Definir funcion
const asyncCallback = function(cb) {
//para ser asincrono 
    setTimeout(() => {
//crear funcion random para 50/50
        if (Math.random() < 0.5){
//No enviar el error 
            return cb (null, "Hello world"); 
        }else{
//Enviar el error
            cb(new Error("Hello error")); 
        }
//2 seg expresado en milisegundos
    }, 2000);  
}; 
//ejecutar la funcion 
asyncCallback((err, msg) =>{
    if (err){
//regresar el error 
        console.log("error, err"); 
    }else{
        console.log("message", msg); 
    }
}); 