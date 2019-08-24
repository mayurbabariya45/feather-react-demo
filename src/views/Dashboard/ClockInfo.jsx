import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button, CircularProgress } from '@material-ui/core'
import useStyles from './styles'

const ClockInfo = ({ boxId, barcode, currentTime, state, isLoading, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.clockInfoContainer}>
      <Typography variant="h5">
        <Typography component="span" color="textSecondary">
          Box Id:{' '}
        </Typography>
        <Typography component="span" color="textSecondary">
          {boxId}
        </Typography>
      </Typography>
      <Typography variant="h5">
        <Typography component="span" color="textSecondary">
          BarCode:{' '}
        </Typography>
        <Typography component="span" color="textSecondary">
          {barcode}
        </Typography>
      </Typography>
      <Typography variant="h5">
        <Typography component="span" color="textSecondary">
          State:{' '}
        </Typography>
        <Typography component="span" color="textSecondary">
          {state}
        </Typography>
      </Typography>
      <Typography variant="h5">
        <Typography component="span" color="textSecondary">
          Clock In Time:{' '}
        </Typography>
        <Typography component="span" color="textSecondary">
          {currentTime}
        </Typography>
      </Typography>
      <div className={classes.buttonsContainer}>
        {isLoading && <CircularProgress size={26} className={classes.loginLoader} />}
        {!isLoading && (
          <Button variant="contained" color="primary" className={classes.button} onClick={onClick}>
            Stop
          </Button>
        )}
      </div>
    </div>
  )
}

ClockInfo.propTypes = {
  boxId: PropTypes.string,
  barcode: PropTypes.string,
  state: PropTypes.string,
  currentTime: PropTypes.string,
}

ClockInfo.defaultProps = {
  boxId: '',
  barcode: '',
  state: '',
  currentTime: '',
}

export default ClockInfo
