// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useModal } from 'react-simple-hook-modal'

// Components
import VideoItem from '@/components/item/video'
import Modal from '@/components/confirmModal/confirmModal'

// Shared
import { RootState } from '@/common/types/state.d'
import { ReleaseModel } from '@/common/types/release'
import * as videoActions from '@/store/actions/release'

type GetColumnProps = {
  type: 'get'
}

const GetColumn: FC<GetColumnProps> = (): JSX.Element => {
  const videoListState: { db: string; data: ReleaseModel[] } = useSelector((s: RootState) => s.releaseState?.VideoList)
  const dsp = useDispatch()

  const [isCompleted, setIsCompleted] = useState<boolean>(true)
  const counter = videoListState?.data?.filter((item) => item.isComplete === isCompleted).length

  const [id, setId] = useState<string>('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => getVideo(), [])

  return (
    <>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`${isCompleted ? 'btn btn-secondary active' : 'btn btn-secondary'}`} key="completed">
          <input
            type="radio"
            name="options"
            checked
            onClick={() => {
              onSwitchChange('true')
            }}
          />
          Completed
        </label>
        <label className={`${isCompleted ? 'btn btn-secondary' : 'btn btn-secondary active'}`} key="InProcess">
          <input
            type="radio"
            name="options"
            onClick={() => {
              onSwitchChange('false')
            }}
          />
          In Process
        </label>
      </div>

      <span className="video-counter">{counter}</span>

      <ol className="get-column-content">
        {videoListState?.data?.map((iVideo: ReleaseModel, index): JSX.Element | boolean => {
          if (iVideo.isComplete === isCompleted) {
            return <VideoItem Video={iVideo} key={iVideo.id} openModal={openModal} setId={setId} position={index} />
          }
          return false
        })}
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

  function onSwitchChange(status: 'true' | 'false') {
    switch (status) {
      case 'true':
        setIsCompleted(true)
        break
      case 'false':
        setIsCompleted(false)
        break
      default:
    }
  }
}

export default GetColumn
