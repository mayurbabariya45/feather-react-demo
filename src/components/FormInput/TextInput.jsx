/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { Field } from 'redux-form'

const Component = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = (touched && error && true) || false
  return <TextField error={hasError} helperText={touched && error} {...input} {...props} />
}

Component.propTypes = {
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object),
}

Component.defaultProps = {
  input: {},
  meta: {},
}

const FieldInput = props => <Field {...props} component={Component} />

export default FieldInput
