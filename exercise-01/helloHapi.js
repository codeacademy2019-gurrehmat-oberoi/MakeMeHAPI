const Hapi = require('hapi');

const server = Hapi.server({
  port: 8080,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  // console.log('Hello hapi');
  handler: () => 'Hello hapi',
});
if (!module.parent) {
  const startListening = async () => {
    await server.start();
    console.log('Server running at:', server.info.uri);
  };
  startListening();
}
module.exports = server;
