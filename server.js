const Hapi = require('hapi');
const pingRoute = require('./routes/ping');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route(pingRoute);
if (!module.parent) {
  const startListening = async () => {
    await server.start();
    console.log('Server running at:', server.info.uri);
  };
  startListening();
}

module.exports = server;
