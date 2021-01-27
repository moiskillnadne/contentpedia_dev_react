// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useModal } from 'react-simple-hook-modal'

// Components
import VideoItem from '@/components/item/video'
import Modal from '@/components/confirmModal/confirmModal'
import Switcher from '@/components/getColumnSwitcher'
import Search from '@/components/getColumnSearch'

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
  const [searchQuery, setSearchQuery] = useState<{ props: string | null; value: string | null }>({
    props: null,
    value: null,
  })

  const [id, setId] = useState<string>('')
  const { isModalOpen, openModal, closeModal } = useModal()

  useEffect(() => {
    if (searchQuery.props !== null && searchQuery.value !== null) {
      fetchingRelease(1, { props: searchQuery.props, value: searchQuery.value })
    } else {
      fetchingRelease(1)
    }
  }, [isCompleted])

  useEffect(() => {
    if (searchQuery.props !== null && searchQuery.value !== null) {
      fetchingRelease(1, { props: searchQuery.props, value: searchQuery.value })
    }
  }, [searchQuery])

  return (
    <>
      <Switcher isCompleted={isCompleted} setIsCompleted={setIsCompleted} />

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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

  function fetchingRelease(page: number | null, query?: Record<string, string | RegExp>) {
    if (!page) return

    if (isCompleted) {
      getCompletedRelease(page, query)
    } else {
      getInprocessRelease(page, query)
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function getCompletedRelease(page: number, query?: Record<string, string | RegExp>) {
    dsp(videoActions.getCompletedRelease(page, query))
  }
  function getInprocessRelease(page: number, query?: Record<string, string | RegExp>) {
    dsp(videoActions.getInprocessRelease(page, query))
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
}

export default GetColumn
