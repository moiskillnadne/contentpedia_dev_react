// Dependencies
import React, { FC } from 'react'
import { Field, Form } from 'react-final-form'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/state'
import { Content } from '@/types/model'
import * as ContentActions from '@/store/actions/content'

// Components
import Input from '@/components/input/input'
import SubItem from '@/components/sub.item/content'

// Shared
import * as utils from '@/components/form/utils'

type RecommendationProps = {
  type: 'video' | 'audio' | 'text'
}

const Recommendation: FC<RecommendationProps> = ({ type }): JSX.Element => {
  const dsp = useDispatch()

  const contentState = useSelector((s: RootState) => s.contentState)
  const state = contentState[`${type}Content` as 'videoContent']

  const enviroment = utils.makeEnvRelatedType(type)

  return (
    <Form
      onSubmit={submitToState}
      subscription={{
        submitting: true,
      }}
      render={({ handleSubmit }) => {
        return (
          <>
            <h5 className="text-center margin-top25 type-item-title">{enviroment.blockTitle}</h5>
            <ul className="list-group white-bg">
              {state.map((item) => (
                <SubItem item={item} key={item.id} type={type} />
              ))}
            </ul>
            <div className="margin-top25" />

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name={`${type}.type`}
                placeholder={enviroment.typePlaceholder}
                label={`${type} content type`}
                small={enviroment.small}
                isValidation
              />

              <Input
                type="text"
                name={`${type}.title`}
                placeholder={enviroment.titlePlaceholder}
                label={`${type} content title`}
                isValidation
              />

              <Input
                type="text"
                name={`${type}.timecode`}
                placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
                label="Timecode url"
                isValidation
              />

              <Input
                type="text"
                name={`${type}.source`}
                placeholder="https://www.amazon.com/Green-Mile-Tom-Hanks/dp/B001EBWIPY"
                label="Url on source"
                isValidation={false}
              />

              <Input type="text" name={`${type}.comments`} label="Comments" isValidation={false} />

              <div className="form-group">
                <Field<string>
                  type="select"
                  name={`${type}.tags`}
                  className="form-control"
                  component="select"
                  subscription={utils.defaultSubs}
                >
                  <option value="none" defaultValue="true">
                    Choose the label
                  </option>
                  <option value="favorites">Favorites</option>
                  <option value="mention">Mention</option>
                  <option value="notFavorites">Not favorites</option>
                </Field>
              </div>

              <button type="submit" className="btn btn-primary margin-top25">
                {`Add ${type} item`}
              </button>
            </form>
          </>
        )
      }}
    />
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitToState(val: Record<string, Content>, form: any): void {
    const values: Content = { ...val[type], id: uuidv4() }

    switch (type) {
      case 'video':
        dsp(ContentActions.videoAdd(values))
        break
      case 'audio':
        dsp(ContentActions.audioAdd(values))
        break
      case 'text':
        dsp(ContentActions.textAdd(values))
        break
    }

    // Restart whole form
    setTimeout(() => form.restart())
  }
}

export default Recommendation
