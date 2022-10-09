const jsonServer = require('json-server');
const server = jsonServer.create();
const jsonRouter = jsonServer.router('./src/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonRouter);
server.listen(port, () => {
  console.log('JSON Server is running');
});