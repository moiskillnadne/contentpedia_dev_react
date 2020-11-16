import React from 'react'
import { useDispatch } from 'react-redux'
import * as videoActions from '@/store/actions/video'

const VideoItem = (props: any): JSX.Element => {
  const dsp = useDispatch()
  const { item } = props

  return (
    <li className="item">
      <h5>{item.video.name.substr(0, 41)}</h5>
      <div>{item.channel.name}</div>
      <img src={item.video.previewUrl} alt="" className="item-img-bg" />
      <span>{item.channel.name ? item.channel.name : 'Канал не был выбран'}</span>
      <div>{item.general.description}</div>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveItemClick(item._id)}>
        Delete
      </button>
    </li>
  )

  function onRemoveItemClick(id: string): void {
    dsp(
      videoActions.remove(id, function onSuccess(res) {
        dsp(videoActions.getList())
      }),
    )
  }
}

export default VideoItem
