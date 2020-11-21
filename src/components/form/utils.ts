export const defaultSubs = {
  value: true,
  error: true,
  active: true,
  touched: true,
}

export const makeEnvRelatedType = (type: string): Record<string, string> => {
  switch (type) {
    case 'video':
      return {
        blockTitle: 'Video recommendation',
        typePlaceholder: 'Film',
        small: 'Example: Film, Video, Clip, Tv-show and etc.',
        titlePlaceholder: 'Green Mile',
      }
    case 'audio':
      return {
        blockTitle: 'Audio recommendation',
        typePlaceholder: 'Artist',
        small: 'Example: Album, Song, Clip, Artist and etc.',
        titlePlaceholder: 'Куок',
      }
    case 'text':
      return {
        blockTitle: 'Text recommendation',
        typePlaceholder: 'Book',
        small: 'Example: Book, Article, News and etc.',
        titlePlaceholder: 'Есть идея!',
      }
    default:
      return {
        blockTitle: 'Undefined recommendation',
        typePlaceholder: '',
        small: 'Undefined description',
        titlePlaceholder: '',
      }
  }
}
