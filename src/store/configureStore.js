if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  module.exports = require('./configureStore.prod')
} else {
  /* eslint-disable global-require */
  module.exports = require('./configureStore.dev')
}
