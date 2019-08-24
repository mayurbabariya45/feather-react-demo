import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import IndexLayout from '../layouts'
import NotFoundPage from '../views/404'
import Loader from '../components/Loader'

const Login = lazy(() => import('../containers/AuthContainer/LoginContainer'))
const Dashboard = lazy(() => import('../containers/DashboardContainer'))

const appRoutes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/auth/login',
    component: Login,
    exact: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
]

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <IndexLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/auth/login" />} />
            {appRoutes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </IndexLayout>
      </Suspense>
    </BrowserRouter>
  )
}
export default Router
