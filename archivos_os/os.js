const os = require('os');

//Potencia del ordenador 
//console.log('CPU info', os.cpus());

// Para conocer la IP
//console.log("IP address", os.networkInterfaces().en0.map(i => i.address));

//Memoria disponible 
// console.log("Memory free in bites", os.freemem());

//Para saber el tipo de sistema operativo
// console.log("OS Type ", os.type());

//Para saber la versión
// console.log("OS Version", os.release());

//Imprimir la información del usuario en uso
console.log("User Info", os.userInfo());