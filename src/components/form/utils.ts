import { ChannelBlockOption } from '@/common/basic'

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

export const requiredValidation = (value: string): string | undefined => (value ? undefined : 'Required')

export const channelBlockOption: ChannelBlockOption[] = [
  {
    defaultValue: 'true',
    value: 'none',
    text: 'Choose the channel',
  },
  {
    defaultValue: 'false',
    value: 'vdud',
    text: 'вДудь',
  },
  {
    defaultValue: 'false',
    value: 'kuji',
    text: 'KuJi',
  },
  {
    defaultValue: 'true',
    value: 'asafyevlife',
    text: 'Асафьев. Жизнь',
  },
]
