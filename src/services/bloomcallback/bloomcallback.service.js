// Initializes the `bloomcallback` service on path `/bloomcallback`
const createService = require('./bloomcallback.class.js');
const hooks = require('./bloomcallback.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bloomcallback', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('bloomcallback');

  service.hooks(hooks);
};
