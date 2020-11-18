import React, { FC } from 'react'
import { Field } from 'react-final-form'
import { SubscriptionSettigns } from '@/types/common'

import { Content } from '@/types/model'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/state'

import VideoItem from './smallItem'

type VideoItemBlockProps = {
  subs: SubscriptionSettigns
}

const VideoItemBlock: FC<VideoItemBlockProps> = (props): JSX.Element => {
  const { subs } = props
  const videoState = useSelector((s: RootState) => s.contentState.videoContent)
  const dsp = useDispatch()

  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Video block</h5>
      <ul className="list-group white-bg">
        {videoState.map((item) => (
          <VideoItem item={item} key={item.id} />
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
          subscription={subs}
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
          subscription={subs}
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
          subscription={subs}
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
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-video-comments">Comments</label>
        <Field<string>
          type="text"
          name="form-video-comments"
          className="form-control"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <Field<string>
          type="select"
          name="form-video-label"
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

      <button type="button" className="btn btn-primary margin-top25" onClick={addItemToList}>
        Add video item
      </button>
    </>
  )

  function addItemToList(e: any) {
    // dsp()
  }
}

export default VideoItemBlock
