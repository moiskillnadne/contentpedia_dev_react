import '@/components/confirmModal/style.less'
import 'react-simple-hook-modal/dist/styles.css'
import React, { FC } from 'react'
import { Modal, ModalTransition } from 'react-simple-hook-modal'

type ConfirmModalProps = {
  isModalOpen: boolean
  content: string
  onTrueButtonClick: () => void
  onFalseButtonClick: () => void
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isModalOpen,
  content,
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
        <div className="true-button">
          <button type="button" onClick={onTrueButtonClick}>
            Yes
          </button>
        </div>
        <div className="false-button">
          <button type="button" onClick={onFalseButtonClick}>
            No
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal
