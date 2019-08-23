import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `100vw`,
    // minHeight: "100vh",
  },
}))
