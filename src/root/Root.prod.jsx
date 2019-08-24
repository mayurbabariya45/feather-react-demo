import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from '../routes'

const Root = ({ store }) => {
  React.useEffect(() => {
    store.dispatch({
      type: 'INITIALIZE_WEB_SOCKETS_CHANNEL',
    })
    return () => {}
  })
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.any),
}

Root.defaultProps = {
  store: {},
}

export default Root
