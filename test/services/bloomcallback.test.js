const app = require('../../src/app');

describe('\'bloomcallback\' service', () => {
  it('registered the service', () => {
    const service = app.service('bloomcallback');
    expect(service).toBeTruthy();
  });
});
