import React from 'react'
import { Field } from 'react-final-form'

const VideoItemBlock = (): JSX.Element => {
  const subsSettings = {
    value: true,
    error: true,
    active: true,
    touched: true,
  }

  const exampleArray = ['string1', 'string2']
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Video block</h5>
      <ul className="list-group white-bg">
        {exampleArray.map((item) => (
          <li className="list-group-item" key={item}>
            <div className="row">
              <span className="col">{item}</span>
              <span className="col">{item}</span>
              <a href={item} className="col">
                Timecode url
              </a>
              <button
                type="button"
                className="col-1 remove-btn-for-item"
                // onClick={() => console.log('Should remove item')}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="margin-top25" />

      <div className="form-group">
        <label htmlFor="form-video-content-type">Video content type</label>
        <Field<string>
          type="text"
          name="form-video-content-type"
          className="form-control"
          placeholder="Film"
          component="input"
          subscription={subsSettings}
        />
        <small id="emailHelp" className="form-text text-muted">
          Example: Film, Video, Clip, Tv-show and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-video-content-title">Video content title</label>
        <Field<string>
          type="text"
          name="form-video-content-title"
          className="form-control"
          placeholder="Green Mile"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-timecode">Timecode url</label>
        <Field<string>
          type="text"
          name="form-video-timecode"
          className="form-control"
          placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-source">Url on source</label>
        <Field<string>
          type="text"
          name="form-video-source"
          className="form-control"
          placeholder="https://www.amazon.com/Green-Mile-Tom-Hanks/dp/B001EBWIPY"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-comments">Comments</label>
        <Field<string>
          type="text"
          name="form-video-comments"
          className="form-control"
          component="input"
          subscription={subsSettings}
        />
      </div>

      <div className="form-group">
        <Field<string>
          type="select"
          name="form-video-label"
          className="form-control"
          component="select"
          subscription={subsSettings}
        >
          <option value="none" defaultValue="true">
            Choose the label
          </option>
          <option value="favorites">Favorites</option>
          <option value="mention">Mention</option>
          <option value="notFavorites">Not favorites</option>
        </Field>
      </div>

      <button
        type="button"
        className="btn btn-primary margin-top25"
        // onClick={}
      >
        Add video item
      </button>
    </>
  )
}

export default VideoItemBlock
