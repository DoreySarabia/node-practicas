//modulo file system
const fs = require('fs'); 
const file = fs.createWriteStream("./big"); 

for (let i = 0; i <= 1e6; i++){
    file.write(
        "El texto simulado más conocido y extendido es el “Lorem ipsum”, cuyo origen parece que se remonta al S. XVI. Lorem ipsum está escrito en un seudo-latín, relativamente cercano al latín real. Pese a contener una serie de palabras latinas y a imitar el ritmo de la mayoría de las lenguas europeas con escritura latina, el Lorem ipsum sigue resultando ininteligible. La ventaja del origen latino y de la falta de sentido del contenido de Lorem ipsum consiste en que el lector no se distrae con el contenido del texto, sino que puede concentrar su atención únicamente en el diseño.Una desventaja de Lorem ipsum reside en que en latín algunas letras aparecen más a menudo que otras, lo que genera una impresión visual diferente. Además, en latín solamente se escriben en mayúsculas las palabras a principio de oración, por lo que Lorem ipsum no puede por ejemplo, imitar fielmente un texto alemán; idioma en el que cada sustantivo se escribe en mayúsculas. Por esta razón, Lorem ipsum es sólo parcialmente adecuado como sustituto visual de textos alemanes. En caso de que el texto simulado deba servir para comparar singularidades tipográficas, sería recomendable escoger textos que contengan a ser posible, todas las letras y símbolos de la lengua empleada.Hoy en día, existe una gran cantidad de textos simulados legibles, utilizados básicamente como textos de relleno. Estas alternativas al Lorem ipsum clásico suelen ser divertidas y cuentan pequeñas historias cómicas o sin sentido"
    ); 
} 

file.end(); 