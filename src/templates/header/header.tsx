import React from 'react'
import history from '@/index/history'

const Header = (): JSX.Element => {
  return (
    <div className="container">
      <div className="margin-top25">
        <h1 className="main-title">ContentPedia for Developers</h1>
      </div>
      <div>
        <div>
          <p>
            Account:
            <strong>{` ${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</strong>
          </p>
          <p>
            Email:
            <strong>{` ${localStorage.getItem('email')}`}</strong>
          </p>
          <p>
            Role:
            <strong>{` ${localStorage.getItem('role')}`}</strong>
          </p>
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={onLogOutClick}>
            Log out
          </button>
        </div>
      </div>
    </div>
  )

  function onLogOutClick() {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')

    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('email')
    localStorage.removeItem('role')

    history.push('/auth', history)
  }
}

export default Header
