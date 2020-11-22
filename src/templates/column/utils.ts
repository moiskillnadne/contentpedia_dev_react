export const makeColumnStyle = (type: string): string | void => {
  switch (type) {
    case 'get':
      return 'column-get'
    case 'add':
      return 'column-add'
    case 'update':
      return 'column-update'
    case 'remove':
      return 'column-remove'
  }
}

export const makeColumnTitle = (type: string): string => {
  switch (type) {
    case 'get':
      return 'All items'
    case 'add':
      return 'Add item'
    case 'update':
      return 'Update item'
    case 'remove':
      return 'Remove item'
    default:
      return 'Undefined column'
  }
}

export const validationRules = (values: any): any => {
  console.log(values)
  const errors = {
    videoLink: '',
    videoTitle: '',
    videoPreviewLink: '',
    guestName: '',
    guestAge: '',
    guestProfession: '',
  }
  if (!values.videoLink) {
    errors.videoLink = 'Required'
  }
  if (!values.videoTitle) {
    errors.videoTitle = 'Required'
  }
  if (!values.videoPreviewLink) {
    errors.videoPreviewLink = 'Required'
  }
  if (!values.guestName) {
    errors.guestName = 'Required'
  }
  if (!values.guestAge) {
    errors.guestAge = 'Required'
  }
  if (!values.guestProfession) {
    errors.guestProfession = 'Required'
  }

  return errors
}
