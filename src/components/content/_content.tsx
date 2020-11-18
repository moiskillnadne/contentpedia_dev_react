import React from 'react'

import GetColumn from '@/components/content/get/getColumn'
import AddColumn from '@/components/content/add/_addColumn'
import UpdateColumn from '@/components/content/update/updateColumn'
import DeleteColumn from '@/components/content/remove/deleteColumn'

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
