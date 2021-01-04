// Dependencies
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Shared
import '@/components/item/style.less'
import * as utils from '@/components/item/utils'
import { ReleaseModel } from '@/common/types/videoModel.d'
import * as VIDEO_ACTION from '@/store/actions/release'
import { RootState } from '@/common/types/state.d'

// Components
import RecommendationCounter from './recommendationCounter'

type VideoItemProps = {
  Video: ReleaseModel
  openModal: () => void
  setId: (id: string) => void
}

const VideoItem: FC<VideoItemProps> = ({ Video, openModal, setId }): JSX.Element => {
  const dsp = useDispatch()
  const videoState = useSelector((s: RootState) => s.releaseState.Video)

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

  function onEditItemClick(video: ReleaseModel): void {
    if (!video) return
    dsp(VIDEO_ACTION.set(videoState ? null : video))
  }
}

export default VideoItem
