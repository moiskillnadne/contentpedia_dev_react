// Dependencies
import React from 'react'
import { Field } from 'react-final-form'

// Components
import Input from './input'

// Shared
import * as utils from './utils'

const ChannelBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Channel block</h5>
      <div className="form-group">
        <Field<string>
          name="form-channel-name"
          component="select"
          className="form-control"
          subscription={utils.defaultSubs}
        >
          <option value="none" defaultValue="true">
            Choose the channel
          </option>
          <option value="vdud">вДудь</option>
          <option value="kuji">KuJi</option>
        </Field>
      </div>

      <h5 className="text-center margin-top25 type-item-title">Video block</h5>

      <Input type="text" name="form-video-link" placeholder="Insert link on the video" label="Video link" />

      <Input type="text" name="form-video-title" placeholder="Insert title of the video" label="Video title" />

      <Input
        type="text"
        name="form-video-preview-link"
        placeholder="Insert link on the video preview"
        label="Video preview link"
      />
    </>
  )
}

export default ChannelBlock
