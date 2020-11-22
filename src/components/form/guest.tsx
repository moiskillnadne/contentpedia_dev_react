// Dependencies
import React from 'react'

// Components
import Input from '@/components/form/input'

const GuestBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Guest block</h5>

      <Input type="text" name="guestName" placeholder="Example: Victor Ryabkov" label="Guest name" isValidation />

      <Input type="text" name="guestAge" placeholder="Example: 26.07.2000" label="Date of Birth" isValidation={false} />

      <Input
        type="text"
        name="guestProfession"
        placeholder="Example: Developer"
        label="Guest profession"
        isValidation={false}
      />
    </>
  )
}

export default GuestBlock
