/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

var isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  const ngrok = require('ngrok');
  (async function () {
    const url = await ngrok.connect(port);
    console.log(url);
  })();
}

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
