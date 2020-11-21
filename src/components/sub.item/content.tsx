import React, { FC } from 'react'
import { Content } from '@/types/model'
import { useDispatch } from 'react-redux'
import * as ContentActions from '@/store/actions/content'
import '@/components/sub.item/style.less'

type SmallItemProps = {
  item: Content
  type: 'video' | 'audio' | 'text'
}

const smallItem: FC<SmallItemProps> = (props): JSX.Element => {
  const { item, type } = props
  const dsp = useDispatch()

  return (
    <li className={`list-group-item ${assignColor(item.tags)}`}>
      <div className="row">
        <span className="col">{item.type}</span>
        <span className="col">{item.title}</span>
        <a href={item.timecode} className="col" target="_blank" rel="noreferrer">
          Timecode url
        </a>
        <button type="button" className="col-1 remove-btn-for-item" onClick={() => removeSelfItem(item.id)}>
          X
        </button>
      </div>
    </li>
  )

  function removeSelfItem(id: string) {
    switch (type) {
      case 'video':
        dsp(ContentActions.removeVideo(id))
        break
      case 'audio':
        dsp(ContentActions.removeAudio(id))
        break
      case 'text':
        dsp(ContentActions.removeText(id))
        break
    }
  }

  function assignColor(tag: string): string {
    switch (tag) {
      case 'favorites':
        return 'favorites-bg-color'
      case 'mention':
        return 'mention-bg-color'
      case 'notFavorites':
        return 'not-favorites-bg-color'
      default:
        return 'mention-bg-color'
    }
  }
}

export default smallItem
