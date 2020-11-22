// Dependencies
import React from 'react'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus'

// Components
import ChannelBlock from '@/components/form/channel'
import GuestBlock from '@/components/form/guest'
import Recommendation from '@/components/form/recommendation'

// Shared
import * as utils from '@/templates/column/utils'

const AddColumn = (): JSX.Element => {
  const focusOnError = createDecorator()

  return (
    <Form
      onSubmit={onSubmitForm}
      decorators={[focusOnError]}
      validate={utils.validationRules}
      subscription={{
        submitting: true,
      }}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <ChannelBlock />
          <GuestBlock />

          <Recommendation type="video" />
          <Recommendation type="audio" />
          <Recommendation type="text" />

          <h5 className="text-center margin-top25 type-item-title">General</h5>
          <div className="form-group">
            <label htmlFor="form-additional-description">Additional description</label>
            <Field name="form-additional-description" type="text" className="form-control" component="textarea" />
            <small className="form-text text-muted">Here you can add some notes which might be important</small>
          </div>

          <div className="margin-top25" />
          <button type="submit" disabled={submitting || pristine} className="btn btn-primary btn-lg btn-block">
            Add item to DataBase
          </button>
          <div className="margin-top25" />
        </form>
      )}
    />
  )
  function onSubmitForm(values: unknown): void {
    // console.log(values)
    // console.log(e.video-link)
  }
}

export default AddColumn
