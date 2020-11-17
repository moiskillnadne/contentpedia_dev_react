import React from 'react'
import { Field } from 'react-final-form'

const ChannelBlock = (): JSX.Element => {
  const subsSettings = {
    value: true,
    error: true,
    active: true,
    touched: true,
  }

  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Channel block</h5>
      <div className="form-group">
        <Field<string> name="form-channel-name" component="select" className="form-control" subscription={subsSettings}>
          <option value="none" defaultValue="true">
            Choose the channel
          </option>
          <option value="vdud">вДудь</option>
          <option value="kuji">KuJi</option>
        </Field>
      </div>

      <h5 className="text-center margin-top25 type-item-title">Video block</h5>
      <div className="form-group">
        <label htmlFor="form-video-link">Video link</label>
        <Field<string>
          name="form-video-link"
          type="text"
          className="form-control"
          placeholder="Insert link on the video"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-title">Video title</label>
        <Field<string>
          name="form-video-title"
          type="text"
          className="form-control"
          placeholder="Insert title of the video"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-preview-link">Video preview link</label>
        <Field<string>
          name="form-video-preview-link"
          type="text"
          className="form-control"
          placeholder="Insert link on the video preview"
          component="input"
          subscription={subsSettings}
        />
      </div>
    </>
  )
}

export default ChannelBlock
