const http = require('http');// importa o http
const app = require('./app');// importa o app
const port = process.env.PORT || 3000; // se a variavel não estiver definida, usa a porta 3000
const server = http.createServer(app);// cria o servidor
server.listen(port);// escuta a porta
