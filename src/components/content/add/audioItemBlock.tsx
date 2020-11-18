import { SubscriptionSettigns } from '@/types/common'
import React, { FC } from 'react'
import { Field } from 'react-final-form'

type AudioItemBlockProps = {
  subs: SubscriptionSettigns
}

const AudioItemBlock: FC<AudioItemBlockProps> = (props): JSX.Element => {
  const { subs } = props

  const exampleArray = ['string1', 'string2']
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Audio block</h5>
      <ul className="list-group white-bg" id="list-of-audio-items">
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
        <label htmlFor="form-audio-content-type">Audio content type</label>
        <Field<string>
          type="text"
          name="form-audio-content-type"
          className="form-control"
          placeholder="Album"
          component="input"
          subscription={subs}
        />
        <small id="emailHelp" className="form-text text-muted">
          Example: Artist, Album, Podcast, Book and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-content-title">Audio content title</label>
        <Field<string>
          type="text"
          name="form-audio-content-title"
          className="form-control"
          placeholder="Красность"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-content-timecode">Timecode url</label>
        <Field<string>
          type="text"
          name="form-audio-content-timecode"
          className="form-control"
          placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-source">Url on source</label>
        <Field<string>
          type="text"
          name="form-audio-source"
          className="form-control"
          placeholder="https://music.yandex.ru/album/12327623"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-audio-comments">Comments</label>
        <Field<string>
          type="text"
          name="form-audio-comments"
          className="form-control"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <Field<string>
          type="select"
          name="form-audio-label"
          className="form-control"
          component="select"
          subscription={subs}
        >
          <option value="none" defaultValue="true">
            Choose the label
          </option>
          <option value="favorites">Favorites</option>
          <option value="mention">Mention</option>
          <option value="notFavorites">Not favorites</option>
        </Field>
      </div>

      <button type="button" className="btn btn-primary margin-top25" id="form-button-add-audio-item">
        Add audio item
      </button>
    </>
  )
}

export default AudioItemBlock
