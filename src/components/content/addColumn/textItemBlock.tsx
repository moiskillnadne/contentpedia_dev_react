import React from 'react'

const TextItemBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Text block</h5>
      <ul className="list-group white-bg" id="list-of-text-items" />
      <div className="margin-top25" />

      <div className="form-group">
        <label htmlFor="form-text-content-type">Text content type</label>
        <input type="text" className="form-control" id="form-text-content-type" />
        <small id="emailHelp" className="form-text text-muted">
          Example: Book, Magazine, Article and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-text-content-title">Text content title</label>
        <input type="text" className="form-control" id="form-text-content-title" />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-content-timecode">Timecode url</label>
        <input type="text" className="form-control" id="form-text-content-timecode" />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-source">Url on source</label>
        <input type="text" className="form-control" id="form-text-source" />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-comments">Comments</label>
        <input type="text" className="form-control" id="form-text-comments" />
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="favorites" id="text-favorites" />
        <label className="form-check-label" htmlFor="text-favorites">
          Favorites
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="mention" id="text-mention" />
        <label className="form-check-label" htmlFor="text-mention">
          Mention
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="notFavorites" id="text-notFavorites" />
        <label className="form-check-label" htmlFor="text-notFavorites">
          Not favorites
        </label>
      </div>

      <button type="button" className="btn btn-primary margin-top25" id="form-button-add-text-item">
        Add text item
      </button>
    </>
  )
}

export default TextItemBlock
