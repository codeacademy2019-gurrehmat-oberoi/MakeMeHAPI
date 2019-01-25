const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: request => `Hello ${encodeURIComponent(request.params.name)}`,
});

if (!module.parent) {
  const startListening = async () => {
    await server.start();
    console.log('Server running at:', server.info.uri);
  };
  startListening();
}

module.exports = server;
