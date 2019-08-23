import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import Footer from '../../components/Footer'
import useStyles from './styles'

const Login = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <Typography className={classes.logotypeText}>Web Application</Typography>
      </div>
      {children}
      <Footer />
    </Grid>
  )
}

Login.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Login
