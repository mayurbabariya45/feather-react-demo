import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Notification from '../components/Notification'
import Routes from '../routes'
import Themes from '../themes'

const Root = ({ store }) => {
  React.useEffect(() => {
    store.dispatch({
      type: 'INITIALIZE_WEB_SOCKETS_CHANNEL',
    })
    return () => {}
  })
  return (
    <Provider store={store}>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <Routes />
        <Notification />
      </ThemeProvider>
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
