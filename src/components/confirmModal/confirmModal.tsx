import '@/components/confirmModal/style.less'
import React from 'react'

const ConfirmModal = (): JSX.Element => {
  return (
    <div className="modal-container">
      <div className="customModal">
        <div className="content">content</div>
        <div className="trueButton">
          <button
            type="button"
            // onClick={onTrueButtonClick}
          >
            Yes
          </button>
        </div>
        <div className="falseButton">
          <button
            type="button"
            // onClick={onFalseButtonClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
