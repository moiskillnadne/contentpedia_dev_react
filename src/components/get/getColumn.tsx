import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, VideoState } from '@/types/state'

import * as videoActions from '@/store/actions/video'
import VideoItem from './getColumn.item'

const GetColumn = (): JSX.Element => {
  const videoState = useSelector((s: RootState): VideoState => s.videoState)
  const dsp = useDispatch()
  useEffect(() => getVideo(), [])

  return (
    <ol className="get-column-content">
      {videoState.VideoList.map(
        (iVideo): JSX.Element => (
          <VideoItem Video={iVideo} key={iVideo._id} />
        ),
      )}
    </ol>
  )

  function getVideo() {
    dsp(videoActions.getList())
  }
}

export default GetColumn
