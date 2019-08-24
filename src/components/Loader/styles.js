import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  progress: {
    margin: theme.spacing(2),
  },
  colorSecondary: {
    color: '#8353a3',
  },
}))
