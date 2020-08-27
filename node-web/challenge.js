//Para crear server
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url =="/echo"){
//String con eventos
        let body = [];
// Un fragmento de datos ha sido recibido.
        req.on('data', chunk => {
            body.push(chunk);
        })
// Toda la respuesta ha sido recibida. Imprimir el resultado
            .on('end', () => {
// Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
            res.writeHead(200, {'Content-Type': 'text/plain'});
            body = Buffer.concat(body).toString();
//formato dd/mm/aaaa
            console.log(`Día ${body[0]}${body[1]} Mes ${body[03]}${body[04]} Año ${body[06]}${body[07]}${body[08]}${body[09]}`);

            //Recibe body en formato DD/MM/YYYY
                function dia_semana(body){ 
                    body=body.split('/');
                    if(body.length!=3){
                            return null;
                }
                //Array para calcular día de la semana de un año regular.
                var regular =[0,3,3,6,1,4,6,2,5,0,3,5]; 
                //Array para calcular día de la semana de un año bisiesto.
                var bisiesto=[0,3,4,0,2,5,0,3,6,1,4,6]; 
                //Array para hacer la traducción de resultado en día de la semana.
                var semana=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                //Día especificado en la body recibida.
                var dia=body[0];
                //Módulo acumulado del mes especificado en la body recibida.
                var mes=body[1]-1;
                //Año especificado por la body recibida.
                var anno=body[2];
                //Comparación para saber si el año recibido es bisiesto.
                if((anno % 4 == 0) && !(anno % 100 == 0 && anno % 400 != 0))
                    mes=bisiesto[mes];
                else
                    mes=regular[mes];
                //Se retorna el resultado del calculo del día de la semana.
                return semana[Math.ceil(Math.ceil(Math.ceil((anno-1)%7)+Math.ceil((Math.floor((anno-1)/4)-Math.floor((3*(Math.floor((anno-1)/100)+1))/4))%7)+mes+dia%7)%7)];
                }
                //envíamos la body con formato dd/mm/aa
                res.end(dia_semana(body));

                    })
        
        }else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');