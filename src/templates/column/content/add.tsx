// Dependencies
import React, { useMemo } from 'react'
import { Form, FormRenderProps } from 'react-final-form'
import createDecorator from 'final-form-focus'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/state'
import { VideoDetailsFormModel } from '@/types/model'
import * as ContentActions from '@/store/actions/content'
import * as videoActions from '@/store/actions/video'

// Components
import ChannelBlock from '@/components/form/channel'
import GuestBlock from '@/components/form/guest'
import Recommendation from '@/components/form/recommendation'

const AddColumn = (): JSX.Element => {
  const focusOnError = useMemo(() => createDecorator<VideoDetailsFormModel>(), [])
  const state = useSelector((s: RootState) => s)
  const dsp = useDispatch()
  let submit: FormRenderProps['handleSubmit']
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let formState: any // ToDo: Присвоить тип когда выйдет Final-Form 4.21

  return (
    <>
      <Form<VideoDetailsFormModel>
        onSubmit={onSubmitForm}
        decorators={[focusOnError]}
        subscription={{
          submitting: true,
        }}
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
    </>
  )
  function onSubmitForm(values: VideoDetailsFormModel): void {
    const data = {
      ...values,
      recommendation: { ...state.contentState },
    }

    dsp(
      videoActions.add(data, function onSuccess() {
        dsp(videoActions.getList())

        console.log(state.videoState.VideoList.length * 151)

        window.scrollTo({
          top: state.videoState.VideoList.length * 151,
          behavior: 'smooth',
        })

        // Restart whole form
        setTimeout(() => formState.restart())
        dsp(ContentActions.contentClear())
      }),
    )
  }
}

export default AddColumn
