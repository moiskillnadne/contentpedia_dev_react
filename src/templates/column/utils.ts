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
