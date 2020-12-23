// Dependencies
import React from 'react'
import { ModalProvider } from 'react-simple-hook-modal'

// Components
import Header from '@/templates/header/header'
import Column from '@/templates/column/_column'

// Shared
import '@/pages/main/style.less'

const Main = (): JSX.Element => {
  return (
    <ModalProvider>
      <div className="container">
        <Header />

        <div className="container-fluid">
          <div className="columns-wrapper">
            <Column type="get" />

            <Column type="add" />
          </div>
        </div>
      </div>
    </ModalProvider>
  )
}

export default Main
