import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const Public = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      {children}
    </Grid>
  )
}

Public.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Public
