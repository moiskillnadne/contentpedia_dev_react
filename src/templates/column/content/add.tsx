// Dependencies
import React from 'react'
import { Form } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { useSelector } from 'react-redux'
import { RootState } from '@/types/state'

// Components
import ChannelBlock from '@/components/form/channel'
import GuestBlock from '@/components/form/guest'
import Recommendation from '@/components/form/recommendation'

const AddColumn = (): JSX.Element => {
  const focusOnError = createDecorator()
  const contentState = useSelector((s: RootState) => s.contentState)
  let submit: any

  return (
    <>
      <Form
        onSubmit={onSubmitForm}
        decorators={[focusOnError]}
        subscription={{
          submitting: true,
        }}
        render={({ handleSubmit }) => {
          submit = handleSubmit
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
  function onSubmitForm(values: unknown): void {
    // const data = { ...values, ...contentState }
    console.log(values)
  }
}

export default AddColumn
