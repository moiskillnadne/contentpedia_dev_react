// Dependencies
import React from 'react'
import { Form } from 'react-final-form'
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
  const focusOnError = createDecorator()
  const contentState = useSelector((s: RootState) => s.contentState)
  const dsp = useDispatch()
  let submit: any
  let formState: any

  return (
    <>
      <Form
        onSubmit={onSubmitForm}
        decorators={[focusOnError as any]}
        subscription={{
          submitting: true,
        }}
        render={({ handleSubmit, form }) => {
          submit = handleSubmit
          formState = form
          return (
            <form onSubmit={handleSubmit}>
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
      recommendation: { ...contentState },
    }

    dsp(
      videoActions.add(data, function onSuccess() {
        dsp(videoActions.getList())

        // Restart whole form
        setTimeout(() => formState.restart())
        dsp(ContentActions.contentClear())
      }),
    )
  }
}

export default AddColumn
