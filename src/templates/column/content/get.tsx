// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useModal } from 'react-simple-hook-modal'

// Components
import VideoItem from '@/components/item/video'
import Modal from '@/components/confirmModal/confirmModal'

// Shared
import { RootState, ReleaseState } from '@/common/types/state.d'
import { ReleaseModel } from '@/common/types/release'
import * as videoActions from '@/store/actions/release'

type GetColumnProps = {
  type: 'get'
}

const GetColumn: FC<GetColumnProps> = (): JSX.Element => {
  const releaseState = useSelector((s: RootState) => s.releaseState as ReleaseState)
  const dsp = useDispatch()

  const [isCompleted, setIsCompleted] = useState<boolean>(true)

  const [id, setId] = useState<string>('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    fetchingRelease(1)
  }, [isCompleted])

  return (
    <>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`${isCompleted ? 'btn btn-secondary active' : 'btn btn-secondary'}`} key="completed">
          <input
            type="radio"
            name="options"
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

      <span className="video-counter">{releaseState.details.totalDocs}</span>

      <ol className="get-column-content">
        {releaseState?.VideoList.map((iVideo: ReleaseModel, index: number): JSX.Element | boolean => {
          return <VideoItem Video={iVideo} key={iVideo.id} openModal={openModal} setId={setId} position={index} />
        })}
      </ol>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`${releaseState.details.hasPrevPage ? 'page-item' : 'page-item disabled'}`}>
            <button
              type="button"
              className="page-link"
              onClick={() => {
                scrollToTop()
                fetchingRelease(releaseState.details.prevPage)
              }}
              aria-disabled={!releaseState.details.hasPrevPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <a className="page-link" href="localhost">
              {releaseState.details.page}
            </a>
          </li>
          <li className={`${releaseState.details.hasNextPage ? 'page-item' : 'page-item disabled'}`}>
            <button
              type="button"
              className="page-link"
              onClick={() => {
                scrollToTop()
                fetchingRelease(releaseState.details.nextPage)
              }}
              aria-disabled={!releaseState.details.hasNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <Modal
        isModalOpen={isModalOpen}
        content="Are you sure you want to delete video?"
        onTrueButtonClick={onTrueButtonClick}
        onFalseButtonClick={customCloseModal}
      />
    </>
  )

  function fetchingRelease(page: number | null) {
    if (!page) return

    if (isCompleted) {
      getCompletedRelease(page)
    } else {
      getInprocessRelease(page)
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function getCompletedRelease(page: number) {
    dsp(videoActions.getCompletedRelease(page))
  }
  function getInprocessRelease(page: number) {
    dsp(videoActions.getInprocessRelease(page))
  }

  function onTrueButtonClick() {
    dsp(
      videoActions.remove(id, function onSuccess() {
        fetchingRelease(releaseState.details.page)
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
