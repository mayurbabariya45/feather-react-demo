import React from 'react'
import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@material-ui/core'
import useStyles from './styles'

const StatusButton = ({ isLoading, isClocked }) => {
  const classes = useStyles()
  return (
    <div className={classes.buttonsContainer}>
      {isLoading && <CircularProgress size={26} className={classes.loginLoader} />}
      {!isLoading && !isClocked && (
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          Start
        </Button>
      )}
      {!isLoading && isClocked && (
        <Button variant="contained" color="primary" className={classes.button} type="submit">
          Stop
        </Button>
      )}
    </div>
  )
}

StatusButton.propTypes = {
  isLoading: PropTypes.bool,
  isClocked: PropTypes.bool,
}

StatusButton.defaultProps = {
  isLoading: false,
  isClocked: false,
}

export default StatusButton
