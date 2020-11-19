import React, { FC } from 'react'
import { Field } from 'react-final-form'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/state'

// Components
import Input from './input'
import SubItem from '../sub.item/recommendation'

import * as utils from './utils'

type RecommendationProps = {
  type: 'video' | 'audio' | 'text'
}

const Recommendation: FC<RecommendationProps> = (props): JSX.Element => {
  const { type } = props

  const state = useSelector((s: RootState) => {
    switch (type) {
      case 'video':
        return s.contentState.videoContent
      case 'audio':
        return s.contentState.audioContent
      case 'text':
        return s.contentState.textContent
    }
  })
  // const dsp = useDispatch()

  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">{utils.makeRecommendationTitle(type)}</h5>
      <ul className="list-group white-bg">
        {state.map((item) => (
          <SubItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="margin-top25" />

      <Input
        type="text"
        name={`${type}-content-type`}
        placeholder="Film"
        label={`${type} content type`}
        small="Example: Film, Video, Clip, Tv-show and etc."
      />

      <Input type="text" name={`${type}-content-title`} placeholder="Green Mile" label={`${type} content title`} />

      <Input
        type="text"
        name={`${type}-timecode`}
        placeholder="https://youtu.be/WoSzy-4mviQ?t=2135"
        label="Timecode url"
      />

      <Input
        type="text"
        name={`${type}-source`}
        placeholder="https://www.amazon.com/Green-Mile-Tom-Hanks/dp/B001EBWIPY"
        label="Url on source"
      />

      <Input type="text" name={`${type}-comments`} label="Comments" />

      <div className="form-group">
        <Field<string>
          type="select"
          name={`${type}-label`}
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

      <button type="button" className="btn btn-primary margin-top25" onClick={addItemToList}>
        {`Add ${type} item`}
      </button>
    </>
  )

  function addItemToList(e: any) {
    // dsp()
  }
}

export default Recommendation
