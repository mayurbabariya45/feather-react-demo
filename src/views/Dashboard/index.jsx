import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { Grid } from '@material-ui/core'

import MenuItem from '@material-ui/core/MenuItem'
import Widget from '../../components/Widget'
import TextInput from '../../components/FormInput/TextInput'
import TextSelect from '../../components/FormInput/TextSelect'
import StatusButton from './StatusButton'

import useStyles from './styles'

const normalizeBarCode = value => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 15)}`
}
const Dashboard = ({
  tasks,
  states,
  initialValues,
  isClocked,
  isLoading,
  dispatch,
  handleSubmit,
}) => {
  const classes = useStyles()
  const taskOptions = tasks.filter(task => task !== '')
  const stateOptions = states.filter(state => state !== '')
  const onSubmit = values => {
    const { boxId } = initialValues
    if (!isClocked) {
      dispatch({
        type: 'clock/CLOCK_IN',
        payload: values,
      })
      return false
    }
    dispatch({
      type: 'clock/CLOCK_OUT',
      payload: { ...values, boxId },
    })
    return false
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Clock">
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextSelect
                id="Select Project Type"
                label="Select Project Type"
                type="text"
                fullWidth
                name="comment"
                variant="outlined"
                // disabled={isClocked}
              >
                {taskOptions.map(option => (
                  <MenuItem key={option} value={option.trim()}>
                    {option}
                  </MenuItem>
                ))}
              </TextSelect>
              {isClocked && (
                <TextSelect
                  id="Select State"
                  label="Select State"
                  type="text"
                  fullWidth
                  name="state"
                  variant="outlined"
                >
                  {stateOptions.map(option => (
                    <MenuItem key={option} value={option.trim()}>
                      {option}
                    </MenuItem>
                  ))}
                </TextSelect>
              )}
              <TextInput
                id="barcode"
                margin="normal"
                label="Box Barcode"
                type="text"
                fullWidth
                name="barcode"
                variant="outlined"
                normalize={normalizeBarCode}
              />
              <StatusButton isClocked={isClocked} isLoading={isLoading} />
            </form>
          </div>
        </Widget>
      </Grid>
    </Grid>
  )
}

Dashboard.propTypes = {}

const validate = values => {
  const errors = {}
  // const barCodeValue =  values.barcode && values.barcode.replace(/[^\d]/g, '')
  if (!values.comment) {
    errors.comment = 'Required'
  }
  if (!values.barcode) {
    errors.barcode = 'Required'
  }
  return errors
}

export default reduxForm({
  form: 'clockForm',
  validate,
})(Dashboard)
