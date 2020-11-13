import React from 'react'

const VideoItemBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Video block</h5>
      <ul className="list-group white-bg" id="list-of-video-items" />
      <div className="margin-top25" />

      <div className="form-group">
        <label htmlFor="form-video-content-type">Video content type</label>
        <input type="text" className="form-control" id="form-video-content-type" />
        <small id="emailHelp" className="form-text text-muted">
          Example: Film, Video, Clip, Tv-show and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-video-content-title">Video content title</label>
        <input type="text" className="form-control" id="form-video-content-title" />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-timecode">Timecode url</label>
        <input type="text" className="form-control" id="form-video-timecode" />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-source">Url on source</label>
        <input type="text" className="form-control" id="form-video-source" />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-comments">Comments</label>
        <input type="text" className="form-control" id="form-video-comments" />
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="favorites" id="video-favorites" />
        <label className="form-check-label" htmlFor="video-favorites">
          Favorites
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="mention" id="video-mention" />
        <label className="form-check-label" htmlFor="video-mention">
          Mention
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="notFavorites" id="video-notFavorites" />
        <label className="form-check-label" htmlFor="video-notFavorites">
          Not favorites
        </label>
      </div>

      <button type="button" className="btn btn-primary margin-top25" id="form-button-add-video-item">
        Add video item
      </button>
    </>
  )
}

export default VideoItemBlock
