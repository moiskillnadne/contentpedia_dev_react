// Dependencies
import React, { FC } from 'react'
import { RecommendationContentModel } from '@/common/types/release'
import { useDispatch } from 'react-redux'
import * as ContentActions from '@/store/actions/recommendationContent'

// Shared
import '@/components/sub.item/style.less'

type SmallItemProps = {
  item: RecommendationContentModel
  type: 'video' | 'audio' | 'text'
}

const smallItem: FC<SmallItemProps> = ({ item, type }): JSX.Element => {
  const dsp = useDispatch()

  return (
    <li className={`list-group-item ${assignColor(item.tags)}`}>
      <div className="row">
        <span className="col">{item.type}</span>
        <span className="col">{item.title}</span>
        <a href={item.timecode} className="col" target="_blank" rel="noreferrer">
          Timecode url
        </a>
        <button
          type="button"
          className="col-1 remove-btn-for-item"
          onClick={() => removeSelfItem(item._id ? item._id : item.id)}
        >
          X
        </button>
      </div>
    </li>
  )

  function removeSelfItem(id: string | undefined) {
    if (!id) return
    switch (type) {
      case 'video':
        dsp(ContentActions.videoRemove(id))
        break
      case 'audio':
        dsp(ContentActions.audioRemove(id))
        break
      case 'text':
        dsp(ContentActions.textRemove(id))
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
