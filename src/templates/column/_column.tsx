// Dependencies
import React, { FC } from 'react'
import { RootState, VideoState } from '@/types/state'
import { useSelector } from 'react-redux'

// Components
import GetColumn from '@/templates/column/content/get'
import AddColumn from '@/templates/column/content/add'

// Shared
import * as utils from '@/templates/column/utils'
import '@/templates/column/style.less'

type ColumnProps = {
  type: 'get' | 'add'
}

const Column: FC<ColumnProps> = (props): JSX.Element => {
  const { type } = props
  const videoState = useSelector((s: RootState): VideoState => s.videoState)

  return (
    <div className={`column ${utils.makeColumnStyle(type)}`}>
      <h3 className="column-title">{utils.makeColumnTitle(type)}</h3>
      {type === 'get' ? <span className="video-counter">{videoState.VideoList.length}</span> : null}
      <div className="container">{makeColumnContent(type)}</div>
    </div>
  )

  function makeColumnContent(type_col: string): JSX.Element | undefined {
    switch (type_col) {
      case 'get':
        return <GetColumn />
      case 'add':
        return <AddColumn />
      default:
        // Here should be 404 template
        break
    }
  }
}

export default Column