import React, { FC } from 'react'
import { RecommendationModel } from '@/common/types/release'

type RecommendationCounterProps = {
  recommendation: RecommendationModel
}

const RecommendationCounter: FC<RecommendationCounterProps> = React.memo(
  ({ recommendation }): JSX.Element => {
    return (
      <div className="recommendation-counter">
        <span className="video">
          <i className="material-icons">video_library</i>
          {recommendation?.video?.length}
        </span>
        <span className="audio">
          <i className="material-icons">headset</i>
          {recommendation?.audio?.length}
        </span>
        <span className="text">
          <i className="material-icons">article</i>
          {recommendation?.text?.length}
        </span>
      </div>
    )
  },
)

export default RecommendationCounter
