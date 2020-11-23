// Dependencies
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import * as videoActions from '@/store/actions/video'
import { VideoModel } from '@/types/model'

// Shared
import '@/components/item/style.less'
import * as utils from '@/components/item/utils'

type VideoItemProps = { Video: VideoModel }

const VideoItem: FC<VideoItemProps> = (props): JSX.Element => {
  const dsp = useDispatch()
  const { Video } = props

  return (
    <li className="item">
      <h5>{utils.makeTitle(Video.video.name)}</h5>

      {/* <div className="recommendation-counter">
        <span className="video">
          Video recommendation:
          {Video.recommendation.videoContent.length}
        </span>
        <span className="audio">
          Audio recommendation:
          {Video.recommendation.audioContent.length}
        </span>
        <span className="text">
          Audio recommendation:
          {Video.recommendation.textContent.length}
        </span>
      </div> */}

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
    dsp(
      videoActions.remove(id, function onSuccess() {
        dsp(videoActions.getList())
      }),
    )
  }
}

export default VideoItem
