import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'

const Header = ({ auth, dispatch }) => {
  const classes = useStyles()
  const isUserAuthorized = auth.authorized
  const handleClick = () => {
    dispatch({
      type: 'user/LOGOUT',
    })
  }
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.headerMenuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Demo App Clock
        </Typography>
        {isUserAuthorized && (
          <IconButton color="inherit" onClick={handleClick}>
            <ExitToAppIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
