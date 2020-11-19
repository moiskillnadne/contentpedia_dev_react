import React, { FC } from 'react'
import { Field, FormSpy } from 'react-final-form'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/state'
import { Content } from '@/types/model'
import * as ContentActions from '@/store/actions/content'

// Components
import Input from '@/components/form/input'
import SubItem from '@/components/sub.item/content'

import * as utils from './utils'

type RecommendationProps = {
  type: 'video' | 'audio' | 'text'
}

const Recommendation: FC<RecommendationProps> = (props): JSX.Element => {
  const { type } = props
  const dsp = useDispatch()

  const contentState = useSelector((s: RootState) => s.contentState)
  const state = contentState[`${type}Content` as 'videoContent']

  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">{utils.makeRecommendationTitle(type)}</h5>
      <ul className="list-group white-bg">
        {state.map((item) => (
          <SubItem item={item} key={item.id} type={type} />
        ))}
      </ul>
      <div className="margin-top25" />

      <Input
        type="text"
        name={`${type}.type`}
        placeholder="Film"
        label={`${type} content type`}
        small="Example: Film, Video, Clip, Tv-show and etc."
      />

      <Input type="text" name={`${type}.title`} placeholder="Green Mile" label={`${type} content title`} />

      <Input
        type="text"
        name={`${type}.timecode`}
        placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
        label="Timecode url"
      />

      <Input
        type="text"
        name={`${type}.source`}
        placeholder="https://www.amazon.com/Green-Mile-Tom-Hanks/dp/B001EBWIPY"
        label="Url on source"
      />

      <Input type="text" name={`${type}.comments`} label="Comments" />

      <div className="form-group">
        <Field<string>
          type="select"
          name={`${type}.label`}
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

      <FormSpy subscription={{ values: true }}>
        {({ values }) => (
          <button
            type="button"
            className="btn btn-primary margin-top25"
            onClick={() => addItemToList({ ...values[type], id: uuidv4() })}
          >
            {`Add ${type} item`}
          </button>
        )}
      </FormSpy>
    </>
  )

  function addItemToList(values: Content): void {
    switch (type) {
      case 'video':
        dsp(ContentActions.addVideo(values))
        break
      case 'audio':
        dsp(ContentActions.addAudio(values))
        break
      case 'text':
        dsp(ContentActions.addText(values))
        break
    }
  }
}

export default Recommendation
