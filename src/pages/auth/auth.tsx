import '@/pages/auth/style.less'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-final-form'
import { AuthForm } from '@/types/auth'

// Components
import Input from '@/components/form/input'

const Auth = (): JSX.Element => {
  const history = useHistory()
  let fromApi: any
  return (
    <div className="auth-background">
      <div className="container">
        <div className="content">
          <h1 className="main-title">Auth page</h1>
          <div className="wrap-form">
            <Form
              onSubmit={formSubmit}
              subscription={{
                submitting: true,
              }}
              render={({ handleSubmit, form }) => {
                fromApi = form
                return (
                  <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" isValidation label="Email" />
                    <Input type="password" name="password" isValidation label="Password" />
                    <button type="submit" className="btn btn-primary">
                      Log In
                    </button>
                  </form>
                )
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )

  function formSubmit(e: AuthForm) {
    console.log(e)

    history.push('/')
  }
}

export default Auth
