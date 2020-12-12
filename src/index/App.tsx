// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import ProtectedRoute from '@/components/protectedRoute/protectedRoute'

// Pages
import Main from '@/pages/main/_main'
import Auth from '@/pages/auth/auth'

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />

      <ProtectedRoute path="/" component={Main} />
    </Switch>
  )
}

export default App
