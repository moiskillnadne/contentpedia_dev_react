import React from 'react'

const Header = (): JSX.Element => {
  return (
    <div className="container">
      <div className="alert alert-success margin-top25 fade" role="alert" id="success-msg" />
      <div className="alert alert-danger margin-top25 fade" role="alert" id="failed-msg" />
      <h1 className="main-title">ContentPedia for Developers</h1>
    </div>
  )
}

export default Header
