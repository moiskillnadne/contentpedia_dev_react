export const makeTitle = (title: string): string => {
  return title?.substr(0, 41)
}
export const makeChannelNameStyle = (type: string): string => {
  switch (type) {
    case 'vdud':
      return 'vdud-background'
    case 'kuji':
      return 'kuji-background'
    default:
      return 'vdud-background'
  }
}

export const makeDescription = (descr: string): string => {
  if (!descr) {
    return 'Description is empty..'
  }
  return descr
}
