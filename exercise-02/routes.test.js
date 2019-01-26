const server = require('./routes');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/CodeAcademy',
  };
  it('should say hello to person', async () => {
    // options.url += 'CodeAcademy';
    const response = await server.inject(options);
    expect(response.result).toEqual('Hello CodeAcademy');
  });
  it('should not say hello to someone else', async () => {
    const response = await server.inject(options);
    expect(response.result).not.toEqual('Hello XYZ');
  });
  it('should deal with special characters', async () => {
    const innerOptions = {
      method: 'GET',
      url: '/Aabe1 s',
    };
    const response = await server.inject(innerOptions);
    expect(response.result).toEqual('Hello Aabe1%20s');
  });
});
