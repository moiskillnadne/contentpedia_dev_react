// Dependencies
import React from 'react'

// Components
import Input from '@/components/form/input'

const GuestBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Guest block</h5>

      <Input type="text" name="guestName" placeholder="Example: Victor Ryabkov" label="Guest name" />

      <Input type="text" name="guestAge" placeholder="Example: 20" label="Guest age" />

      <Input type="text" name="guestProfession" placeholder="Example: Developer" label="Guest profession" />
    </>
  )
}

export default GuestBlock
