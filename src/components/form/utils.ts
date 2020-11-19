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
