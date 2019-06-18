/*const math = require('./math');

console.log(math);

console.log(math.add(3,0));
console.log(math.substract(3,0));
console.log(math.multiply(3,0));
console.log(math.divide(3,0));*/

/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Total men: ' + os.totalmem() + ' bytes');
console.log('Free men: ' + os.freemem() + ' bytes');
console.log(os.userInfo());
console.log(os.hostname());*/

//const fs = require('fs');

/*fs.writeFile('./texto.txt', '\nLinea uno\n', function(e) {
    console.log(e ? e : 'Archivo creado');
});

console.log('Last line of file');

fs.readFile('./texto.txt', function(e, data) {
    console.log(e ? e : data.toString());
});*/

//const http =  require('http');
const colors = require('colors');

/*const handlerServer = function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo desde nodejs!</h1>');
    res.end();
}

const server = http.createServer(handlerServer);

server.listen(3000, function() {
    console.log('Server on port 3000'.yellow)
});
*/

const express = require('express');

const server = express();

server.listen(3000, function() {
    console.log('Server on port 3000'.red);
});

server.get('/', function (req, res) {
    res.send('<h1>Hola mundo con express</h1>')
});