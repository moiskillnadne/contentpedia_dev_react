import React from 'react'

const GuestBlock = (): JSX.Element => {
  return (
    <>
      <h5 className="text-center margin-top25 type-item-title">Guest block</h5>
      <div className="form-group">
        <label htmlFor="form-guest-name">Guest name</label>
        <input type="text" className="form-control" id="form-guest-name" placeholder="Example: Victor Ryabkov" />
      </div>

      <div className="form-group">
        <label htmlFor="form-guest-age">Guest age</label>
        <input type="text" className="form-control" id="form-guest-age" placeholder="Example: 20" />
      </div>

      <div className="form-group">
        <label htmlFor="form-guest-profession">Guest profession</label>
        <input type="text" className="form-control" id="form-guest-profession" placeholder="Example: Developer" />
      </div>
    </>
  )
}

export default GuestBlock
