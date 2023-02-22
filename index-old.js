const http = require('http');

http
  .createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.write('Hola mundovich');

    res.end();
  })
  .listen(8080);

console.log('Escuchando puerto 8080');
