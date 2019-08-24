import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import useStyles from './styles'

function Loader() {
  const classes = useStyles()
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    function tick() {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1))
    }
    const timer = setInterval(tick, 20)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress
        size={50}
        thickness={2.5}
        classes={{ root: classes.colorSecondary }}
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </div>
  )
}

Loader.propTypes = {}

export default Loader
