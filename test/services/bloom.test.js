const app = require('../../src/app');

describe('\'bloom\' service', () => {
  it('registered the service', () => {
    const service = app.service('bloom');
    expect(service).toBeTruthy();
  });
});
