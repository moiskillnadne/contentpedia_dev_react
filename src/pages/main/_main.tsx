// Dependencies
import React from 'react'

// Components
import Header from '@/templates/header/header'
import Column from '@/templates/column/_column'

// Shared
import '@/pages/main/style.less'

const Main = (): JSX.Element => {
  return (
    <div className="container">
      <Header />

      <div className="container">
        <div className="columns-wrapper">
          <Column type="get" />

          <div className="column-wrapper-managment">
            <Column type="add" />
            <Column type="update" />
            <Column type="remove" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
