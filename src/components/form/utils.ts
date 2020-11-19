import { Content } from '@/types/model'
import { v4 as uuidv4 } from 'uuid'

export const defaultSubs = {
  value: true,
  error: true,
  active: true,
  touched: true,
}

// type RecommendationBlock = {
//   title: string

// }

export const makeRecommendationTitle = (type: string): string => {
  switch (type) {
    case 'video':
      return 'Video recommendation'
    case 'audio':
      return 'Audio recommendation'
    case 'text':
      return 'Text recommendation'
    default:
      return 'Undefined recommendation'
  }
}

export const validateValues = (type: 'video' | 'audio' | 'text', values: Record<string, string>): Content => {
  return {
    id: uuidv4(),
    type: values[`${type}-content-type`],
    name: values[`${type}-content-title`],
    timecode: values[`${type}-timecode`],
    url: values[`${type}-source`],
    comment: values[`${type}-comment`],
    tags: [values[`${type}-label`]],
  }
}
