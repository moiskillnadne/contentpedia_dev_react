import React from 'react'

import GetColumn from '@/components/content/content.getColumn'
import AddColumn from '@/components/content/addColumn/addColumn'
import UpdateColumn from '@/components/content/content.updateColumn'
import DeleteColumn from '@/components/content/content.deleteColumn'

const Content = (): JSX.Element => {
  return (
    <div className="container">
      <div className="columns-wrapper">
        <GetColumn />

        <div className="column-wrapper-managment">
          <AddColumn />
          <UpdateColumn />
          <DeleteColumn />
        </div>
      </div>
    </div>
  )
}

export default Content
