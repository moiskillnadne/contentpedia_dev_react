import { SubscriptionSettigns } from '@/types/common'
import React, { FC } from 'react'
import { Field } from 'react-final-form'

type GuestBlockProps = {
  subs: SubscriptionSettigns
}

const GuestBlock: FC<GuestBlockProps> = (props): JSX.Element => {
  const { subs } = props

  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Guest block</h5>
      <div className="form-group">
        <label htmlFor="form-guest-name">Guest name</label>
        <Field<string>
          type="text"
          name="form-guest-name"
          className="form-control"
          placeholder="Example: Victor Ryabkov"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-guest-age">Guest age</label>
        <Field<string>
          type="text"
          name="form-guest-age"
          className="form-control"
          placeholder="Example: 20"
          component="input"
          subscription={subs}
        />
      </div>

      <div className="form-group">
        <label htmlFor="form-guest-profession">Guest profession</label>
        <Field<string>
          type="text"
          name="form-guest-profession"
          className="form-control"
          placeholder="Example: Developer"
          component="input"
          subscription={subs}
        />
      </div>
    </>
  )
}

export default GuestBlock
