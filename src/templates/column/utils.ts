export const makeColumnStyle = (type: string): string | void => {
  switch (type) {
    case 'get':
      return 'column-get'
    case 'add':
      return 'column-add'
    case 'edit':
      return 'column-edit'
  }
}

export const makeColumnTitle = (type: string): string => {
  switch (type) {
    case 'get':
      return 'All items'
    case 'add':
      return 'Add item'
    case 'edit':
      return 'Edit item'
    default:
      return 'Undefined column'
  }
}
