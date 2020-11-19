import React, { FC } from 'react'
import { Content } from '@/types/model'
import { useDispatch } from 'react-redux'

type SmallItemProps = { item: Content }

const smallItem: FC<SmallItemProps> = (props): JSX.Element => {
  const { item } = props
  const dispatch = useDispatch()

  return (
    <li className="list-group-item">
      <div className="row">
        <span className="col">{item}</span>
        <span className="col">{item}</span>
        <a href={item.url} className="col" target="_blank" rel="noreferrer">
          Timecode url
        </a>
        <button type="button" className="col-1 remove-btn-for-item" onClick={removeSelfItem}>
          X
        </button>
      </div>
    </li>
  )

  function removeSelfItem() {
    console.log('Should remove item')
  }
}

export default smallItem
