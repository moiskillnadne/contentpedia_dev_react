import { RootState } from '@/types/state'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'

type SmallProps = {
  small?: string
  name?: string
}

const Small: FC<SmallProps> = (props): JSX.Element => {
  const { small, name } = props
  const validation = useSelector((s: RootState) => s.videoState.validation)

  if (small) return <small className="form-text text-muted">{small}</small>
  if (name === 'video.url' && validation.previewLink) {
    return (
      <small className="form-text text-muted">
        Check autogenerated link:
        <small className="form-text text-muted">
          <a href={validation.previewLink as string} target="_blank" rel="noreferrer">
            {validation.previewLink}
          </a>
        </small>
      </small>
    )
  }

  return <></>
}

export default Small
