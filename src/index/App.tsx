// Dependencies
import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import history from '@/index/history'

// Components
import ProtectedRoute from '@/components/protectedRoute/protectedRoute'

// Pages
import Main from '@/pages/main/_main'
import Auth from '@/pages/auth/auth'

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={Auth} />

        <ProtectedRoute path="/" component={Main} />
      </Switch>
    </Router>
  )
}

export default App
