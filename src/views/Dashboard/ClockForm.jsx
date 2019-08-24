import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { Button, MenuItem, CircularProgress } from '@material-ui/core'
import TextInput from '../../components/FormInput/TextInput'
import TextSelect from '../../components/FormInput/TextSelect'
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
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 13)}`
}
const ClockForm = ({ tasks, isLoading, handleSubmit, onSubmit }) => {
  const classes = useStyles()
  const taskOptions = tasks.filter(task => task !== '')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextSelect
        id="Select Project Type"
        label="Select Project Type"
        type="text"
        fullWidth
        name="comment"
        variant="outlined"
      >
        {taskOptions.map(option => (
          <MenuItem key={option} value={option.trim()}>
            {option}
          </MenuItem>
        ))}
      </TextSelect>
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
      <div className={classes.buttonsContainer}>
        {isLoading && <CircularProgress size={26} className={classes.loginLoader} />}
        {!isLoading && (
          <Button variant="contained" color="primary" className={classes.button} type="submit">
            Start
          </Button>
        )}
      </div>
    </form>
  )
}

ClockForm.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
}

ClockForm.defaultProps = {
  tasks: [],
  isLoading: false,
  handleSubmit: () => {},
  onSubmit: () => {},
}

const validate = values => {
  const errors = {}
  if (!values.comment) {
    errors.comment = 'Required'
  }
  if (!values.barcode) {
    errors.barcode = 'Required'
  } else if (
    values.barcode.length >= 0 &&
    values.barcode.length <= 14 &&
    !/^([0-9]{3}[-][0-9]{3}[-][0-9]{6})$/i.test(values.barcode)
  ) {
    errors.barcode = 'Invalid barcode, must be 12 digits'
  } else if (
    values.barcode.length >= 15 &&
    !/^([0-9]{3}[-][0-9]{3}[-][0-9]{7})$/i.test(values.barcode)
  ) {
    errors.barcode = 'Invalid barcode, must be 13 digits'
  }
  return errors
}
export default reduxForm({
  form: 'clockForm',
  validate,
})(ClockForm)
