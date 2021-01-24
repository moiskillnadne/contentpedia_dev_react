// Dependencies
import React from 'react'
import { Switch, Route, Router, useLocation } from 'react-router-dom'
import history from '@/index/history'

// Components
import ProtectedRoute from '@/components/protectedRoute/protectedRoute'

// Pages
import Main from '@/pages/main/_main'
import Auth from '@/pages/auth/auth'

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Navigation />
    </Router>
  )
}

function Navigation() {
  const location = useLocation()
  return (
    <Switch location={location}>
      <Route exact path="/auth" component={Auth} />

      <ProtectedRoute path="/" component={Main} />
    </Switch>
  )
}

export default App
