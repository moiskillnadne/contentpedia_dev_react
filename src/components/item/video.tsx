// Dependencies
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

// Shared
import '@/components/item/style.less'
import * as utils from '@/components/item/utils'
import { VideoModel } from '@/types/model'
import * as VIDEO_ACTION from '@/store/actions/video'

// Components
import RecommendationCounter from './recommendationCounter'

type VideoItemProps = {
  Video: VideoModel
  openModal: () => void
  setId: (id: string) => void
}

const VideoItem: FC<VideoItemProps> = ({ Video, openModal, setId }): JSX.Element => {
  const dsp = useDispatch()

  return (
    <li className="item">
      <h5>{utils.makeTitle(Video.video.name)}</h5>

      <RecommendationCounter recommendation={Video.recommendation} />

      <button type="button" className="btn btn-delete btn-danger btn-sm" onClick={() => onRemoveItemClick(Video._id)}>
        Delete
      </button>
      <button type="button" className="btn btn-edit btn-info btn-sm" onClick={() => onEditItemClick(Video)}>
        Edit
      </button>
      <span className={utils.makeChannelNameStyle(Video.channel.name)}>
        {Video.channel.name ? Video.channel.name : 'Канал не был выбран'}
      </span>
      <img src={Video.video.previewUrl} alt="" className="item-img-bg" />
    </li>
  )

  function onRemoveItemClick(id: string): void {
    if (!id) return
    document.body.classList.add('no-scroll')
    openModal()
    setId(id)
  }

  function onEditItemClick(video: VideoModel): void {
    if (!Video) return
    dsp(VIDEO_ACTION.set(video))
  }
}

export default VideoItem
