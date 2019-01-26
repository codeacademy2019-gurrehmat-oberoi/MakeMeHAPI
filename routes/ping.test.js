const server = require('../server');

describe('server', () => {
  it('should return "pong" for the string "ping"', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('pong');
  });
  it('should not return "pong" if request is not ping route', async () => {
    const options = {
      method: 'GET',
      url: '/notaPing',
    };
    const response = await server.inject(options);
    expect(response.result).not.toEqual('pong');
  });
});
