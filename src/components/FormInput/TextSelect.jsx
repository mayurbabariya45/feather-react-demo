/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'

const setHeight = property => props => props[property] / 2 - 50
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions())
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimensions
}

const StyledSelect = withStyles({
  icon: {
    right: 10,
  },
  paper: {
    maxHeight: setHeight('height'),
  },
})(({ classes, labelWidth, input, ...props }) => (
  <Select
    classes={classes}
    {...props}
    input={<OutlinedInput labelWidth={labelWidth} id="input" {...input} />}
    MenuProps={{
      classes,
      anchorReference: null,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      transformOrigin: { vertical: 'top', horizontal: 'center' },
    }}
  />
))
const TextSelect = ({ classes, input, label, meta: { touched, error }, ...props }) => {
  const inputLabel = React.useRef(null)
  const { height } = useWindowDimensions()
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])
  const hasError = (touched && error && true) || false
  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        {label}
      </InputLabel>
      <StyledSelect height={height} labelWidth={labelWidth} input={input} {...props} />
      {hasError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

TextSelect.propTypes = {
  classes: PropTypes.instanceOf(Object),
  input: PropTypes.instanceOf(Object),
  meta: PropTypes.instanceOf(Object),
  label: PropTypes.string,
}

TextSelect.defaultProps = {
  classes: {},
  input: {},
  meta: {},
  label: '',
}

const SelectField = props => <Field {...props} component={TextSelect} />

export default SelectField
