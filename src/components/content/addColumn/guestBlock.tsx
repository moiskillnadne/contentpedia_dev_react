import React from 'react'
import { Field } from 'react-final-form'

const GuestBlock = (): JSX.Element => {
  const subsSettings = {
    value: true,
    error: true,
    active: true,
    touched: true,
  }
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
          subscription={subsSettings}
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
          subscription={subsSettings}
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
          subscription={subsSettings}
        />
      </div>
    </>
  )
}

export default GuestBlock
