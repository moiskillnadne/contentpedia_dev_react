// Dependencies
import React from 'react'
import { ModalProvider } from 'react-simple-hook-modal'
import { useSelector } from 'react-redux'

// Components
import Header from '@/templates/header/header'
import Column from '@/templates/column/_column'

// Shared
import '@/pages/main/style.less'
import { RootState } from '@/common/types/state.d'

const Main = (): JSX.Element => {
  const videoState = useSelector((s: RootState) => s.releaseState?.Video)

  return (
    <ModalProvider>
      <div className="container">
        <Header />

        <div className="container-fluid">
          <div className="columns-wrapper">
            <Column type="get" />

            <Column type="add" />

            {videoState ? <Column type="edit" /> : <></>}
          </div>
        </div>
      </div>
    </ModalProvider>
  )
}

export default Main
