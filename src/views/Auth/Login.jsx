import React from 'react'
import { reduxForm } from 'redux-form'
import { CircularProgress, Typography, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import TextField from '../../components/FormInput/TextInput'
import useStyles from './styles'

function Login({ dispatch, isLoading, handleSubmit }) {
  const classes = useStyles()
  const onSubmit = values => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }
  return (
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <Typography variant="h1" className={classes.greeting}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="username"
            margin="normal"
            label="Username"
            type="text"
            fullWidth
            name="username"
            variant="outlined"
          />
          <TextField
            id="password"
            margin="normal"
            label="Password"
            type="password"
            fullWidth
            name="password"
            variant="outlined"
          />
          <div className={classes.formButtons}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
              <Button variant="contained" color="primary" size="large" type="submit">
                Login
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

export default withRouter(
  reduxForm({
    form: 'loginForm',
    // initialValues: {
    //   username: 'JL20',
    //   password: 'hello123',
    // },
    validate,
  })(Login),
)
