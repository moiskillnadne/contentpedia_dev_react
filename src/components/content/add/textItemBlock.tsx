import { SubscriptionSettigns } from '@/types/common'
import React, { FC } from 'react'
import { Field } from 'react-final-form'

type TextItemBlockProps = {
  subs: SubscriptionSettigns
}

const TextItemBlock: FC<TextItemBlockProps> = (props): JSX.Element => {
  const { subs } = props

  const exampleArray = ['string1', 'string2']
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Text block</h5>
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
        <label htmlFor="form-text-content-type">Text content type</label>
        <Field<string>
          type="text"
          name="form-text-content-type"
          className="form-control"
          placeholder="Book"
          component="input"
          subscription={subs}
        />
        <small id="emailHelp" className="form-text text-muted">
          Example: Book, Magazine, Article and etc.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="form-text-content-title">Text content title</label>
        <Field<string>
          type="text"
          name="form-text-content-title"
          className="form-control"
          placeholder="Harry Potter and the Philosopher’s Stone"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-content-timecode">Timecode url</label>
        <Field<string>
          type="text"
          name="form-text-content-timecode"
          className="form-control"
          placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-source">Url on source</label>
        <Field<string>
          type="text"
          name="form-text-source"
          className="form-control"
          placeholder="https://www.bookvoed.ru/book?id=6155724&gclid=Cj0KCQiAhs79BRD0ARIsAC6XpaW06_Fe8M0VHPsb2-ulc3aIyKpU68X_W8P54qKcqFhbqhinEGBDVKAaAsvpEALw_wcB"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-text-comments">Comments</label>
        <Field<string>
          type="text"
          name="form-text-comments"
          className="form-control"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <Field<string>
          type="select"
          name="form-text-label"
          className="form-control"
          placeholder="Book"
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

      <button
        type="button"
        className="btn btn-primary margin-top25"
        // onClick={() => console.log('Should add in list')}
      >
        Add text item
      </button>
    </>
  )
}

export default TextItemBlock
