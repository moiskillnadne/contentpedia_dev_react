import React from 'react'

const ChannelBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Channel block</h5>
      <div className="form-group">
        <label htmlFor="form-channel-name">
          Choose the channel
          <select className="form-control" id="form-channel-name">
            <option value="none" defaultValue="true">
              None
            </option>
            <option value="vdud">вДудь</option>
            <option value="kuji">KuJi</option>
          </select>
        </label>
      </div>

      <h5 className="text-center margin-top25 type-item-title">Video block</h5>
      <div className="form-group">
        <label htmlFor="form-video-link">Video link</label>
        <input type="text" className="form-control" placeholder="Insert link on the video" id="form-video-link" />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-title">Video title</label>
        <input type="text" className="form-control" placeholder="Insert title of the video" id="form-video-title" />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-preview-link">Video preview link</label>
        <input
          type="text"
          className="form-control"
          placeholder="Insert link on the video preview"
          id="form-video-preview-link"
        />
      </div>
    </>
  )
}

export default ChannelBlock
