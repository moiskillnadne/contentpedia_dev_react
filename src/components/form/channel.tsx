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
        <Field<string>
          name="channel.name"
          component="select"
          className="form-control"
          subscription={utils.defaultSubs}
          validate={utils.requiredValidation}
        >
          <option value="none" defaultValue="true">
            Choose the channel
          </option>
          <option value="vdud">вДудь</option>
          <option value="kuji">KuJi</option>
        </Field>
      </div>

      <h5 className="text-center margin-top25 type-item-title">Video block</h5>

      <Input type="text" name="video.url" placeholder="Insert link on the video" label="Video link" isValidation />

      <Input type="text" name="video.name" placeholder="Insert title of the video" label="Video title" isValidation />
    </>
  )
}

export default ChannelBlock
