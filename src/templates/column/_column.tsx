// Dependencies
import React, { FC } from 'react'
import { useSelector } from 'react-redux'

// Components
import GetColumn from '@/templates/column/content/get'
import AddColumn from '@/templates/column/content/add'

// Shared
import * as utils from '@/templates/column/utils'
import '@/templates/column/style.less'
import { RootState } from '@/common/state'

type ColumnProps = {
  type: 'get' | 'add' | 'edit'
}

const Column: FC<ColumnProps> = ({ type }): JSX.Element => {
  const videoListState = useSelector((s: RootState) => s.releaseState?.VideoList)

  return (
    <div className={`column ${utils.makeColumnStyle(type)}`}>
      <h3 className="column-title">{utils.makeColumnTitle(type)}</h3>
      {type === 'get' ? <span className="video-counter">{videoListState.length}</span> : null}
      <div className="container">{makeColumnContent(type)}</div>
    </div>
  )

  function makeColumnContent(type_col: string): JSX.Element | undefined {
    switch (type_col) {
      case 'get':
        return <GetColumn />
      case 'add':
        return <AddColumn />
      case 'edit':
        return <AddColumn />
      default:
        // Here should be 404 template
        break
    }
  }
}

export default Column
