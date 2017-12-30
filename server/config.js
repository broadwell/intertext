var config = {
  api: {
    protocol: 'http',
    host: 'localhost',
    port: 8080,
    prefix: 'api'
  },
  db: 'intertextualitet'
};

config.endpoint = config.api.protocol + '://' +
  config.api.host + ':' +
  config.api.port + '/' +
  config.api.prefix + '/';

module.exports = config;