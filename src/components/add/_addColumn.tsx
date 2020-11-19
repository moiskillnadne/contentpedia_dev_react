import React from 'react'
import { Form, Field } from 'react-final-form'

import ChannelBlock from '@/components/add/channelBlock'
import GuestBlock from '@/components/add/guestBlock'
import VideoItemBlock from '@/components/add/videoItemBlock'
import AudioItemBlock from '@/components/add/audioItemBlock'
import TextItemBlock from '@/components/add/textItemBlock'
import { SubscriptionSettigns } from '@/types/common'

const AddColumn = (): JSX.Element => {
  const subsSettings: SubscriptionSettigns = {
    value: true,
    error: true,
    active: true,
    touched: true,
  }

  return (
    <Form
      onSubmit={onSubmitForm}
      subscription={{
        submitting: true,
      }}
      render={({ handleSubmit }) => (
        <form id="add-item-form" onSubmit={handleSubmit}>
          <ChannelBlock subs={subsSettings} />
          <GuestBlock subs={subsSettings} />
          <VideoItemBlock subs={subsSettings} />
          <AudioItemBlock subs={subsSettings} />
          <TextItemBlock subs={subsSettings} />

          <h5 className="text-center margin-top25 type-item-title">General</h5>
          <div className="form-group">
            <label htmlFor="form-additional-description">Additional description</label>
            <Field
              name="form-additional-description"
              type="text"
              className="form-control"
              component="textarea"
              subscription={subsSettings}
            />
            <small id="emailHelp" className="form-text text-muted">
              Here you can add some notes which might be important
            </small>
          </div>

          <div className="margin-top25" />
          <button
            type="submit"
            // disabled={submitting}
            className="btn btn-primary btn-lg btn-block"
            id="add-item-to-database-button"
          >
            Add item to DataBase
          </button>
          <div className="margin-top25" />
        </form>
      )}
    />
  )
  function onSubmitForm(e: any): void {
    console.log(e)
  }
}

export default AddColumn
