const fs = require("fs");
//Leer archivos que se encuentran dentro
//dirname información del directorio actual 
const files = fs.readdir(__dirname, (err, files) => {
//verificar si hay un error 
  if (err) {
    return console.log(err);
  }

  console.log(files);
});