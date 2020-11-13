import React from 'react'

const AudioItemBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Audio block</h5>
      <ul className="list-group white-bg" id="list-of-audio-items" />
      <div className="margin-top25" />

      <div className="form-group">
        <label htmlFor="form-audio-content-type">Audio content type</label>
        <input type="text" className="form-control" id="form-audio-content-type" />
        <small id="emailHelp" className="form-text text-muted">
          Example: Artist, Album, Podcast, Book and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-content-type">Audio content title</label>
        <input type="text" className="form-control" id="form-audio-content-title" />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-content-timecode">Timecode url</label>
        <input type="text" className="form-control" id="form-audio-content-timecode" />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-source">Url on source</label>
        <input type="text" className="form-control" id="form-audio-source" />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-comments">Comments</label>
        <input type="text" className="form-control" id="form-audio-comments" />
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="favorites" id="audio-favorites" />
        <label className="form-check-label" htmlFor="audio-favorites">
          Favorites
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="mention" id="audio-mention" />
        <label className="form-check-label" htmlFor="audio-mention">
          Mention
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="notFavorites" id="audio-notFavorites" />
        <label className="form-check-label" htmlFor="audio-notFavorites">
          Not favorites
        </label>
      </div>

      <button type="button" className="btn btn-primary margin-top25" id="form-button-add-audio-item">
        Add audio item
      </button>
    </>
  )
}

export default AudioItemBlock
