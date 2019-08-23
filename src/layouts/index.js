import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { Helmet } from 'react-helmet'
import LoginLayout from './Login'
import PublicLayout from './Public'
import MainLayout from './Main'

const Layouts = {
  public: PublicLayout,
  login: LoginLayout,
  main: MainLayout,
}

class IndexLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      children,
      location: { pathname, search },
      auth,
    } = this.props
    const currentPath = pathname + search
    if (currentPath !== this.previousPath) {
      NProgress.start()
    }

    setTimeout(() => {
      NProgress.done()
      this.previousPath = currentPath
    }, 300)
    const getLayout = () => {
      if (pathname === '/') {
        return 'public'
      }
      if (/^\/auth(?=\/|$)/i.test(pathname)) {
        return 'login'
      }
      return 'main'
    }
    const Container = Layouts[getLayout()]
    const isUserAuthorized = auth.authorized
    const isUserLoading = auth.loading
    const isLoginLayout = getLayout() === 'login'
    const BootstrappedLayout = () => {
      if (isUserLoading && !isUserAuthorized && !isLoginLayout) {
        return <div>Loding....</div>
      }
      if (!isLoginLayout && !isUserAuthorized) {
        return <Redirect to="/auth/login" />
      }
      if (isLoginLayout && isUserAuthorized) {
        return <Redirect to="/dashboard" />
      }
      return <Container>{children}</Container>
    }

    return (
      <>
        <Helmet titleTemplate="Demo App" />
        {BootstrappedLayout()}
      </>
    )
  }
}

export default connect(({ auth }) => ({ auth }))(withRouter(IndexLayout))
