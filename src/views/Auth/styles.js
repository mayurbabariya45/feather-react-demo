import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    backgroundColor: '#536DFE',
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
  },
  logotypeText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
  },
  formContainer: {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  form: {
    width: 320,
  },
  greeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  errorMessage: {
    textAlign: 'center',
  },
  formButtons: {
    width: '100%',
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetButton: {
    textTransform: 'none',
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: theme.spacing(2),
    },
  },
}))
