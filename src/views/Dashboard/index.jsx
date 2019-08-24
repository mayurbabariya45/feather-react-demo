/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Widget from '../../components/Widget'
import ClockForm from './ClockForm'
import ClockInfo from './ClockInfo'
import useStyles from './styles'

const Dashboard = ({ tasks, initialValues, isClocked, isLoading, dispatch }) => {
  const classes = useStyles()
  const onSubmit = values => {
    if (!isClocked) {
      dispatch({
        type: 'clock/CLOCK_IN',
        payload: values,
      })
      return false
    }
    dispatch({
      type: 'clock/CLOCK_OUT',
      payload: initialValues,
    })
    return false
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Clock Information">
          <div className={classes.formContainer}>
            {!isClocked && <ClockForm tasks={tasks} isLoading={isLoading} onSubmit={onSubmit} />}
            {isClocked && <ClockInfo {...initialValues} isLoading={isLoading} onClick={onSubmit} />}
          </div>
        </Widget>
      </Grid>
    </Grid>
  )
}

Dashboard.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  initialValues: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
  isClocked: PropTypes.bool,
}

Dashboard.defaultProps = {
  tasks: [],
  initialValues: {},
  isLoading: false,
  isClocked: false,
}

export default Dashboard
