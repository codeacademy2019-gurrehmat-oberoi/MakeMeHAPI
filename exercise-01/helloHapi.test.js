const server = require('./helloHapi');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
  it('should say hello hapi', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual('Hello hapi');
  });
  it('should not return arbitrary string', async () => {
    const response = await server.inject(options);
    expect(response.result).not.toEqual('abc');
  });
});
