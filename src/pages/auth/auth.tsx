import '@/pages/auth/style.less'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-final-form'
import { AuthForm } from '@/types/auth'
import { login } from '@/store/actions/auth'
import md5 from 'md5'

// Components
import Input from '@/components/form/input'

const Auth = (): JSX.Element => {
  const dsp = useDispatch()

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

  async function formSubmit(values: AuthForm) {
    dsp(
      login({ email: values.email, password: md5(values.password) }, function onSuccess(data: any) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('refresh', data.refreshToken)
        history.push('/')
      }),
    )
  }
}

export default Auth