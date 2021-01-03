// Dependencies
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useModal } from 'react-simple-hook-modal'

// Components
import VideoItem from '@/components/item/video'
import Modal from '@/components/confirmModal/confirmModal'

// Shared
import { RootState } from '@/common/state.d'
import * as videoActions from '@/store/actions/video'

const GetColumn = (): JSX.Element => {
  const releaseState = useSelector((s: RootState) => s.releaseState)
  const dsp = useDispatch()

  const [id, setId] = useState<string>('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => getVideo(), [])

  return (
    <>
      <ol className="get-column-content">
        {releaseState.VideoList.map(
          (iVideo): JSX.Element => (
            <VideoItem Video={iVideo} key={iVideo._id} openModal={openModal} setId={setId} />
          ),
        )}
      </ol>
      <Modal
        isModalOpen={isModalOpen}
        content="Are you sure you want to delete video?"
        onTrueButtonClick={onTrueButtonClick}
        onFalseButtonClick={customCloseModal}
      />
    </>
  )

  function getVideo() {
    dsp(videoActions.getList())
  }

  function onTrueButtonClick() {
    dsp(
      videoActions.remove(id, function onSuccess() {
        getVideo()
        customCloseModal()
      }),
    )
  }

  function customCloseModal() {
    closeModal()
    document.body.classList.remove('no-scroll')
  }
}

export default GetColumn
