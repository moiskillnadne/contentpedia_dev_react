import React from 'react'
import { Form, Field } from 'react-final-form'

import ChannelBlock from '@/components/content/addColumn/channelBlock'
import GuestBlock from '@/components/content/addColumn/guestBlock'
import VideoItemBlock from '@/components/content/addColumn/videoItemBlock'
import AudioItemBlock from '@/components/content/addColumn/audioItemBlock'
import TextItemBlock from '@/components/content/addColumn/textItemBlock'

const AddColumn = (): JSX.Element => {
  const subsSettings = {
    value: true,
    error: true,
    active: true,
    touched: true,
  }
  function onSubmitForm(e: any): void {
    console.log(e)
  }

  return (
    <div className="column add-column">
      <h3 className="column-title">Add item</h3>
      <div className="container">
        <Form
          onSubmit={onSubmitForm}
          subscription={{
            submitting: true,
          }}
          render={({ handleSubmit }) => (
            <form id="add-item-form" onSubmit={handleSubmit}>
              <ChannelBlock />
              <GuestBlock />
              <VideoItemBlock />
              <AudioItemBlock />
              <TextItemBlock />

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
      </div>
    </div>
  )
}

export default AddColumn
