// Dependencies
import React, { FC } from 'react'

// Shared
import '@/components/item/style.less'
import * as utils from '@/components/item/utils'
import { VideoModel } from '@/types/model'

type VideoItemProps = {
  Video: VideoModel
  openModal: () => void
  setId: (id: string) => void
}

const VideoItem: FC<VideoItemProps> = ({ Video, openModal, setId }): JSX.Element => {
  return (
    <li className="item">
      <h5>{utils.makeTitle(Video.video.name)}</h5>

      <div className="recommendation-counter">
        <span className="video">
          <i className="material-icons">video_library</i>
          {Video.recommendation.videoContent.length}
        </span>
        <span className="audio">
          <i className="material-icons">headset</i>
          {Video.recommendation.audioContent.length}
        </span>
        <span className="text">
          <i className="material-icons">article</i>
          {Video.recommendation.textContent.length}
        </span>
      </div>

      <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveItemClick(Video._id)}>
        Delete
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
}

export default VideoItem
