import React, { FC } from 'react'

type SwitcherProps = {
  isCompleted: boolean
  setIsCompleted: (isCompleted: boolean) => void
}

const Switcher: FC<SwitcherProps> = ({ isCompleted, setIsCompleted }): JSX.Element => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className={`${isCompleted ? 'btn btn-secondary active' : 'btn btn-secondary'}`} key="completed">
        <input
          type="radio"
          name="options"
          onClick={() => {
            onSwitchChange('true')
          }}
        />
        Completed
      </label>
      <label className={`${isCompleted ? 'btn btn-secondary' : 'btn btn-secondary active'}`} key="InProcess">
        <input
          type="radio"
          name="options"
          onClick={() => {
            onSwitchChange('false')
          }}
        />
        In Process
      </label>
    </div>
  )

  function onSwitchChange(status: 'true' | 'false') {
    switch (status) {
      case 'true':
        setIsCompleted(true)
        break
      case 'false':
        setIsCompleted(false)
        break
      default:
    }
  }
}

export default Switcher
