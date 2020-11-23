export const makeColumnStyle = (type: string): string | void => {
  switch (type) {
    case 'get':
      return 'column-get'
    case 'add':
      return 'column-add'
  }
}

export const makeColumnTitle = (type: string): string => {
  switch (type) {
    case 'get':
      return 'All items'
    case 'add':
      return 'Add item'
    default:
      return 'Undefined column'
  }
}
