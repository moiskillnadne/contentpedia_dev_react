import React, { FC } from 'react'
import { RecommendationModel } from '@/common/videoModel'

type RecommendationCounterProps = {
  recommendation: RecommendationModel
}

const RecommendationCounter: FC<RecommendationCounterProps> = ({ recommendation }): JSX.Element => {
  return (
    <div className="recommendation-counter">
      <span className="video">
        <i className="material-icons">video_library</i>
        {recommendation.videoContent.length}
      </span>
      <span className="audio">
        <i className="material-icons">headset</i>
        {recommendation.audioContent.length}
      </span>
      <span className="text">
        <i className="material-icons">article</i>
        {recommendation.textContent.length}
      </span>
    </div>
  )
}

export default RecommendationCounter
