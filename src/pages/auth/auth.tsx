import '@/pages/auth/style.less'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import md5 from 'md5'
import history from '@/index/history'

// Components
import Input from '@/components/input/input'

// Shared
import { AuthForm } from '@/common/types/auth.d'
import { login, getUser } from '@/store/actions/auth'

const Auth = (): JSX.Element => {
  const dsp = useDispatch()

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
              render={({ handleSubmit }) => {
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

  async function formSubmit(values: AuthForm) {
    dsp(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      login({ email: values.email, password: md5(values.password) }, function onSuccess({ body }) {
        localStorage.setItem('token', body.token)
        localStorage.setItem('refresh', body.refreshToken)
        dsp(getUser({ email: values.email }, onLoginSuccess))
      }),
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onLoginSuccess(response: any) {
    const { data } = response.body
    localStorage.setItem('firstName', data.firstName)
    localStorage.setItem('lastName', data.lastName)
    localStorage.setItem('role', data.role)
    localStorage.setItem('email', data.email)
    history.push('/')
  }
}

export default Auth
