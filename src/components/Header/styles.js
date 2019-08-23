import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  logotype: {
    color: 'white',
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: 'nowrap',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  appBar: {
    width: '100vw',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
  },
}))
