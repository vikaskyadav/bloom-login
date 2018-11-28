// Initializes the `bloom` service on path `/bloom`
const createService = require('./bloom.class.js');
const hooks = require('./bloom.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bloom', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('bloom');

  service.hooks(hooks);
};
