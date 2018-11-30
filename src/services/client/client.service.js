// Initializes the `client` service on path `/client`
const createService = require('feathers-memory');
const hooks = require('./client.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/client', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('client');

  service.hooks(hooks);
};
