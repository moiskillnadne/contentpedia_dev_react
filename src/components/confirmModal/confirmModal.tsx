import '@/components/confirmModal/style.less'
import 'react-simple-hook-modal/dist/styles.css'
import React, { FC } from 'react'
import { Modal, ModalTransition } from 'react-simple-hook-modal'

type ConfirmModalProps = {
  isModalOpen: boolean
  content: string
  trueButton?: string
  onTrueButtonClick: () => void
  falseButton?: string
  onFalseButtonClick?: () => void
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isModalOpen,
  content,
  trueButton,
  falseButton,
  onTrueButtonClick,
  onFalseButtonClick,
}): JSX.Element => {
  return (
    <Modal
      id="confirmation-modal"
      isOpen={isModalOpen}
      transition={ModalTransition.SCALE}
      modalClassName="confirmation-modal"
    >
      <div className="modal-container">
        <div className="content">
          <h3>{content}</h3>
        </div>
        <div className={`${onFalseButtonClick ? 'true-button' : 'true-button-single'}`}>
          <button type="button" onClick={onTrueButtonClick}>
            {trueButton || 'Yes'}
          </button>
        </div>
        {onFalseButtonClick ? (
          <div className="false-button">
            <button type="button" onClick={onFalseButtonClick}>
              {falseButton || 'No'}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  )
}

export default ConfirmModal
