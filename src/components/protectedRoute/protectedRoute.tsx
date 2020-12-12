/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

type ProtectedRouteProps = {
  component: () => JSX.Element
  path: string
}

const ProtectedRoute: FC<ProtectedRouteProps> = (props): JSX.Element => {
  const Component = props.component

  const isAuthenticated = localStorage.getItem('token')
  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/auth' }} />
}

export default ProtectedRoute
