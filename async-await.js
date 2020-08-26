//La funcion devuelve una promesa 
//Primero convertir promesa a función 
const promiseFunction = () => new Promise((resolve, reject) => {
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
    //seg expresado en milisegundos
        }, 500);  
    });

async function asyncAwait (){
    try{
//obtener mensaje
        const msg = await promiseFunction(); 
        console.log("message", msg); 
    }catch (err){
//Mensaje que se recibe
        console.log("error", err); 
    }
}

asyncAwait(); 