import React, { FC } from 'react'

// Components
import GetColumn from './content/get'
import AddColumn from './content/add'
import UpdateColumn from './content/update'
import RemoveColumn from './content/remove'

import * as utils from './utils'
import './style.less'

type ColumnProps = {
  type: 'get' | 'add' | 'update' | 'remove'
}

const Column: FC<ColumnProps> = (props): JSX.Element => {
  const { type } = props

  return (
    <div className={`column ${utils.makeColumnStyle(type)}`}>
      <h3 className="column-title">{utils.makeColumnTitle(type)}</h3>
      <div className="container">{makeColumnContent(type)}</div>
    </div>
  )

  function makeColumnContent(type_col: string): JSX.Element | undefined {
    switch (type_col) {
      case 'get':
        return <GetColumn />
      case 'add':
        return <AddColumn />
      case 'update':
        return <UpdateColumn />
      case 'remove':
        return <RemoveColumn />

      default:
        // Here should be 404 template
        break
    }
  }
}

export default Column
