const os = require('os');
//la clase se puede usar para crear un registrador simple con flujos de salida configurables
const consoleFile = new console.Console(process.stdout);
consoleFile.welcome = ()=>{
    console.log(`Has iniciado una nueva sesión. Fecha: ${new Date()}`)
}

consoleFile.type = () =>{
    console.log("Tipo de sistema", os.release());
}
consoleFile.info = ()=>{
    console.log("Tu información es: ", os.userInfo());
}
consoleFile.success = ()=>{
    console.log('Proceso completado con exito')
}
consoleFile.welcome()
consoleFile.type()
consoleFile.success()
consoleFile.info()