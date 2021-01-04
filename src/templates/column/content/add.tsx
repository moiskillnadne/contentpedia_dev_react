// Dependencies
import React, { useMemo, useState } from 'react'
import { Form, FormRenderProps } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { useModal } from 'react-simple-hook-modal'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/common/types/state.d'
import { RawReleaseModel } from '@/common/types/videoModel.d'
import * as ContentActions from '@/store/actions/recommendationContent'
import * as videoActions from '@/store/actions/release'

// Components
import ChannelBlock from '@/components/form/channel'
import GuestBlock from '@/components/form/guest'
import Recommendation from '@/components/form/recommendation'
import Modal from '@/components/confirmModal/confirmModal'

const AddColumn = (): JSX.Element => {
  const focusOnError = useMemo(() => createDecorator<RawReleaseModel>(), [])
  const state = useSelector((s: RootState) => s)
  const dsp = useDispatch()
  let submit: FormRenderProps['handleSubmit']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let formState: any // ToDo: Присвоить тип когда выйдет Final-Form 4.21
  const { isModalOpen, openModal, closeModal } = useModal()
  const [modalContent, setModalContent] = useState<string>('')

  return (
    <>
      <Form<RawReleaseModel>
        onSubmit={onSubmitForm}
        decorators={[focusOnError]}
        subscription={{
          submitting: true,
        }}
        initialValues={
          {
            channel: state.releaseState?.Video?.channel,
            video: state.releaseState?.Video?.video,
            guest: state.releaseState?.Video?.guest,
          } || undefined
        }
        render={({ handleSubmit, form }) => {
          submit = handleSubmit
          formState = form
          return (
            <form onSubmit={handleSubmit}>
              <div />
              <ChannelBlock />
              <GuestBlock />
            </form>
          )
        }}
      />

      <Recommendation type="video" key="video" />
      <Recommendation type="audio" key="audio" />
      <Recommendation type="text" key="text" />

      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block margin-top25 margin-bottom25"
        onClick={(event) => {
          submit(event)
        }}
      >
        Submit to DB
      </button>

      <Modal isModalOpen={isModalOpen} content={modalContent} trueButton="4etko!" onTrueButtonClick={closeModal} />
    </>
  )
  function onSubmitForm(values: RawReleaseModel): void {
    const data = {
      ...values,
      recommendation: { ...state.recommendationContentState },
    }
    console.log(data)

    // dsp(videoActions.add(data, onSuccess, onFail))
  }

  function onSuccess() {
    dsp(videoActions.getList())

    window.scrollTo({
      top: state.releaseState.VideoList.length * 151,
      behavior: 'smooth',
    })
    setModalContent('Video item was added successfully!')
    openModal()

    // Restart whole form
    setTimeout(() => formState.restart())
    dsp(ContentActions.contentClear())
  }

  function onFail(e: Record<'error', string>) {
    setModalContent(e.error)
    openModal()
  }
}

export default AddColumn
