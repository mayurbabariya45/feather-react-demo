import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <Typography color="primary" className={classes.copyright}>
      © 2014-2019. All rights reserved.
    </Typography>
  )
}

Footer.propTypes = {}

export default Footer
