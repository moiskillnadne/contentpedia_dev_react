import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import * as videoActions from '@/store/actions/video'
import { VideoModel } from '@/types/model'

type VideoItemProps = { Video: VideoModel }

const VideoItem: FC<VideoItemProps> = (props): JSX.Element => {
  const dsp = useDispatch()
  const { Video } = props

  return (
    <li className="item">
      <h5>{Video.video.name.substr(0, 41)}</h5>
      <div>{Video.channel.name}</div>
      <img src={Video.video.previewUrl} alt="" className="item-img-bg" />
      <span>{Video.channel.name ? Video.channel.name : 'Канал не был выбран'}</span>
      <div>{Video.general.description}</div>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveItemClick(Video._id)}>
        Delete
      </button>
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
