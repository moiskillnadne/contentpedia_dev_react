// Dependencies
import React from 'react'
import { Field } from 'react-final-form'

// Components
import Input from '@/components/form/input'

// Shared
import * as utils from '@/components/form/utils'

const ChannelBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Channel block</h5>
      <div className="form-group">
        <Field<string> name="channelName" component="select" className="form-control" subscription={utils.defaultSubs}>
          <option value="none" defaultValue="true">
            Choose the channel
          </option>
          <option value="vdud">вДудь</option>
          <option value="kuji">KuJi</option>
        </Field>
      </div>

      <h5 className="text-center margin-top25 type-item-title">Video block</h5>

      <Input type="text" name="videoLink" placeholder="Insert link on the video" label="Video link" isValidation />

      <Input type="text" name="videoTitle" placeholder="Insert title of the video" label="Video title" isValidation />

      <Input
        type="text"
        name="videoPreviewLink"
        placeholder="Insert link on the video preview"
        label="Video preview link"
        isValidation
      />
    </>
  )
}

export default ChannelBlock
