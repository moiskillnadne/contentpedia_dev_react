export const makeColumnStyle = (type: string): string | void => {
  switch (type) {
    case 'get':
      return 'get-column'
    case 'add':
      return 'add-column'
    case 'update':
      return 'update-column'
    case 'remove':
      return 'remove-column'
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
