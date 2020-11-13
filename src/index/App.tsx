import React from 'react'

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <div className="alert alert-success margin-top25 fade" role="alert" id="success-msg" />
        <div className="alert alert-danger margin-top25 fade" role="alert" id="failed-msg" />
        <h1 className="main-title">ContentPedia for Developers</h1>
      </div>

      <div className="container">
        <div className="columns-wrapper">
          <div className="column get-column">
            <h3 className="column-title">All items</h3>
            <ol className="get-column-content" />
          </div>

          <div className="column-wrapper-managment">
            <div className="column add-column">
              <h3 className="column-title">Add item</h3>

              <div className="container">
                <form id="add-item-form">
                  <h5 className="text-center margin-top25 type-item-title">Channel block</h5>
                  <div className="form-group">
                    <label htmlFor="form-channel-name">
                      Choose the channel
                      <select className="form-control" id="form-channel-name">
                        <option value="none" selected>
                          None
                        </option>
                        <option value="vdud">вДудь</option>
                        <option value="kuji">KuJi</option>
                      </select>
                    </label>
                  </div>

                  {/* <!-- Video block start --> */}
                  <h5 className="text-center margin-top25 type-item-title">Video block</h5>
                  <div className="form-group">
                    <label htmlFor="form-video-link">Video link</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Insert link on the video"
                      id="form-video-link"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-video-title">Video title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Insert title of the video"
                      id="form-video-title"
                    />
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
                  {/* <!-- Video block end --> */}

                  {/* <!-- Guest block start --> */}
                  <h5 className="text-center margin-top25 type-item-title">Guest block</h5>
                  <div className="form-group">
                    <label htmlFor="form-guest-name">Guest name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="form-guest-name"
                      placeholder="Example: Victor Ryabkov"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-guest-age">Guest age</label>
                    <input type="text" className="form-control" id="form-guest-age" placeholder="Example: 20" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-guest-profession">Guest profession</label>
                    <input
                      type="text"
                      className="form-control"
                      id="form-guest-profession"
                      placeholder="Example: Developer"
                    />
                  </div>
                  {/* <!-- Guest block end --> */}

                  {/* <!-- Video block start --> */}
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
                  {/* <!-- Video block end --> */}

                  {/* <!-- Audio block Start --> */}
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
                  {/* <!-- Audio block end --> */}

                  {/* <!-- Text block start --> */}
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

            <div className="column update-column">
              <h3 className="column-title">Update item</h3>
              <div className="" />
            </div>

            <div className="column delete-column">
              <h3 className="column-title">Delete item</h3>
              <div className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
