if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  module.exports = require('./Root.prod')
} else {
  /* eslint-disable global-require */
  module.exports = require('./Root.dev')
}
