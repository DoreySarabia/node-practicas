//Crear sevidor 
const http = require ('http'); 
const server = http.createServer(); 

server.on("request", (req, res) => {
    if (req.method === "POST" && req.url == "/echo"){
//String con eventos
        let body = []; 
// Un fragmento de datos ha sido recibido.
        req.on('data', chunk => {
            body.push(chunk); 
        })
// Toda la respuesta ha sido recibida. Imprimir el resultado
        .on("end", () => {
// Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
        res.writeHead(200, {"Content-Type": "text/plain"})  
        body = Buffer.concat(body).toString(); 
        res.end(body); 
    }); 
    }else{
        res.statusCode = 404; 
        res.end(); 
    }
}); 
//URL para las peticiones
server.listen(8001); 
console.log("Servidor en la URL http://localhost:8001"); 
