//para manipular archivos
const fs = require("fs");

fs.copyFile("poema.txt", "poemacopia.txt", err => {
  if (err) {
    console.log(err);
  }

  console.log("poema.txt fue copiado como poemacopia.txt");
});