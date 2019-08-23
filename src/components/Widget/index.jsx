import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import classnames from 'classnames'
import useStyles from './styles'

export default function Widget({ children, title, noBodyPadding, bodyClass, header }) {
  const classes = useStyles()
  return (
    <div className={classes.widgetWrapper}>
      <Paper className={classes.paper} classes={{ root: classes.widgetRoot }}>
        <div className={classes.widgetHeader}>
          {header || (
            <>
              <Typography variant="h5" color="textSecondary">
                {title}
              </Typography>
            </>
          )}
        </div>
        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
    </div>
  )
}
