//interpreta tanto write como read en un solo archivo
const {Duplex} = require('stream');

const duplexStream = new Duplex({
    write(chunk, encoding, callback){
        console.log(chunk.toString());
        callback();
    },
    read(size){
        //90 = Z 
        if(this.currentCharCode > 90){
            this.push(null);
            return;
        }
        //push para cada letra 
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});
//empezar desde A 
duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);