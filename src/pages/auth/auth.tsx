import '@/pages/auth/style.less'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-final-form'
import { AuthForm } from '@/types/auth'

// Components
import Input from '@/components/form/input'

const Auth = (): JSX.Element => {
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
                    <Link
                      to="/"
                      className="btn btn-primary"
                      // onClick={(e) => handleSubmit(e)}
                    >
                      Log In
                    </Link>
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

    // Form cleaning
    setTimeout(() => fromApi.restart())
  }
}

export default Auth
