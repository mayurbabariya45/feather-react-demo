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
}))
