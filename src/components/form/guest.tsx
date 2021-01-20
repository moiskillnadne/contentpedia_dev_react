// Dependencies
import React from 'react'

// Components
import Input from '@/components/input/input'

const GuestBlock = React.memo(
  (): JSX.Element => {
    return (
      <>
        <h5 className="text-center margin-top25 type-item-title">Guest block</h5>

        <Input type="text" name="guest.nickname" placeholder="Moi skill na dne" label="Guest nickname" isValidation />

        <Input type="text" name="guest.firstname" placeholder="Victor" label="Guest first name" isValidation />
        <Input type="text" name="guest.lastname" placeholder="Ryabkov" label="Guest last name" isValidation />
        <Input type="text" name="guest.middlename" placeholder="Alexandrovich" label="Guest middle name" isValidation />

        <Input type="text" name="guest.birthDate" placeholder="26.07.2000" label="Date of Birth" isValidation={false} />

        <Input
          type="text"
          name="guest.profession"
          placeholder="Developer"
          label="Guest profession"
          isValidation={false}
        />
      </>
    )
  },
)

export default GuestBlock
