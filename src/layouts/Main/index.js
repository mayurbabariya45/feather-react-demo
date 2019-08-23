import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Main = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Main
