import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import Footer from '../../components/Footer'

const Public = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      {children}
      <Footer />
    </Grid>
  )
}

Public.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Public
