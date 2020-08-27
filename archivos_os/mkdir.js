//modulo
const fs = require("fs");

fs.mkdir("../archivos_os/nuevo", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});