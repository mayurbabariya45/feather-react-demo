import React from 'react'
import Notification from 'react-notification-system'

const notificationRef = React.createRef()

export const notificationStates = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
}

const defaultWidth =
  window.screen.width > 768 ? (window.screen.width * 1) / 3 : window.screen.width - 40

export const style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: 'fixed',
      width: defaultWidth,
      padding: '10px 10px 10px 10px',
      zIndex: 9998,
      WebkitBoxSizing: '',
      MozBoxSizing: '',
      boxSizing: '',
      height: 'auto',
      display: 'inline-block',
      border: '0',
      fontSize: '14px',
      margin: '0 auto',
      left: '0',
      WebkitFontSmoothing: 'antialiased',
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: '400',
      color: '#FFFFFF',
    },

    tl: {
      top: '0px',
      bottom: 'auto',
      left: '0px',
      right: 'auto',
    },

    tr: {
      top: '0px',
      bottom: 'auto',
      left: 'auto',
      right: '0px',
    },

    tc: {
      top: '0px',
      bottom: 'auto',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2),
    },

    bl: {
      top: 'auto',
      bottom: '0px',
      left: '0px',
      right: 'auto',
    },

    br: {
      top: 'auto',
      bottom: '0px',
      left: 'auto',
      right: '0px',
    },

    bc: {
      top: 'auto',
      bottom: '0px',
      margin: '0 auto',
      left: '50%',
      marginLeft: -(defaultWidth / 2),
    },
  },

  NotificationItem: {
    DefaultStyle: {
      position: 'relative',
      width: '100%',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
      margin: '10px 0 0',
      padding: '20px',
      display: 'block',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      opacity: 0,
      transition: 'all 0.5s ease-in-out',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform, opacity',

      isHidden: {
        opacity: 0,
      },

      isVisible: {
        opacity: 1,
      },
    },

    success: {
      borderTop: 0,
      backgroundColor: '#43a047',
      WebkitBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(76,175,80,.4)',
      MozBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(76,175,80,.4)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(76,175,80,.4)',
    },

    error: {
      borderTop: 0,
      backgroundColor: '#d32f2f',
      WebkitBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(244,67,54,.4)',
      MozBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(244,67,54,.4)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(244,67,54,.4)',
    },

    warning: {
      borderTop: 0,
      backgroundColor: '#ff9e0f',
      WebkitBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4)',
      MozBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4)',
    },

    info: {
      borderTop: 0,
      backgroundColor: '#00cae3',
      WebkitBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4)',
      MozBoxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4)',
    },
  },

  Title: {
    DefaultStyle: {
      fontSize: '30px',
      margin: '0',
      padding: 0,
      fontWeight: 'bold',
      color: '#FFFFFF',
      display: 'block',
      left: '15px',
      position: 'absolute',
      top: '50%',
      marginTop: '-15px',
    },
    span: {
      fontSize: '30px',
    },
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: '0',
      marginRight: '30px',
      padding: '0 12px 0 0',
      color: '#FFFFFF',
      maxWidthwidth: '89%',
    },
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: 'inherit',
      fontSize: '21px',
      color: '#000',
      float: 'right',
      position: 'absolute',
      right: '10px',
      top: '50%',
      marginTop: '-16px',
      backgroundColor: '#FFFFFF',
      display: 'block',
      borderRadius: '50%',
      opacity: '.4',
      lineHeight: 1,
      width: '25px',
      height: '25px',
      outline: '0 !important',
      textAlign: 'center',
      padding: '6px 3px 3px 3px',
      fontWeight: '300',
    },
  },

  Action: {
    DefaultStyle: {
      background: '#ffffff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0,
    },

    success: {
      backgroundColor: '#43a047',
      color: '#ffffff',
    },

    error: {
      backgroundColor: '#d32f2f',
      color: '#ffffff',
    },

    warning: {
      backgroundColor: '#ffbc67',
      color: '#ffffff',
    },

    info: {
      backgroundColor: '#63d8f1',
      color: '#ffffff',
    },
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
    },
  },
}

export const addNotification = props => {
  const properties = {
    uid: Math.random(1),
    message: 'Notification message',
    level: 'success',
    position: 'tc',
    autoDismiss: 3,
    dismissible: 'both',
    ...props,
  }
  const { current } = notificationRef
  const { uid } = properties
  current.addNotification({
    ...properties,
  })
  return uid
}

export const removeNotification = uid => {
  const { current } = notificationRef
  if (!uid) return current.clearNotifications()
  current.removeNotification(uid)
  return false
}

const NotificationSystem = () => <Notification ref={notificationRef} style={style} />

export default NotificationSystem
