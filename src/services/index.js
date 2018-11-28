const bloomcallback = require('./bloomcallback/bloomcallback.service.js');
const bloom = require('./bloom/bloom.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(bloomcallback);
  app.configure(bloom);
};
