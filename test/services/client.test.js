const app = require('../../src/app');

describe('\'client\' service', () => {
  it('registered the service', () => {
    const service = app.service('client');
    expect(service).toBeTruthy();
  });
});
