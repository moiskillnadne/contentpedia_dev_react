import React from 'react'

import ChannelBlock from '@/components/content/addColumn/channelBlock'
import GuestBlock from '@/components/content/addColumn/guestBlock'
import VideoItemBlock from '@/components/content/addColumn/videoItemBlock'
import AudioItemBlock from '@/components/content/addColumn/audioItemBlock'
import TextItemBlock from '@/components/content/addColumn/textItemBlock'

const AddColumn = (): JSX.Element => {
  return (
    <div className="column add-column">
      <h3 className="column-title">Add item</h3>
      <div className="container">
        <form id="add-item-form">
          <ChannelBlock />
          <GuestBlock />
          <VideoItemBlock />
          <AudioItemBlock />
          <TextItemBlock />

          <h5 className="text-center margin-top25 type-item-title">General</h5>
          <div className="form-group">
            <label htmlFor="form-additional-description">Additional description</label>
            <textarea className="form-control" id="form-additional-description" rows={4} />
            <small id="emailHelp" className="form-text text-muted">
              Here you can add some notes which might be important
            </small>
          </div>

          <div className="margin-top25" />
          <button type="button" className="btn btn-primary btn-lg btn-block" id="add-item-to-database-button">
            Add item to DataBase
          </button>
          <div className="margin-top25" />
        </form>
      </div>
    </div>
  )
}

export default AddColumn
