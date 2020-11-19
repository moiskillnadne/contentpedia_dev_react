import React from 'react'

// Components
import Input from './input'

const GuestBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Guest block</h5>

      <Input type="text" name="form-guest-name" placeholder="Example: Victor Ryabkov" label="Guest name" />

      <Input type="text" name="form-guest-age" placeholder="Example: 20" label="Guest age" />

      <Input type="text" name="form-guest-profession" placeholder="Example: Developer" label="Guest profession" />
    </>
  )
}

export default GuestBlock
