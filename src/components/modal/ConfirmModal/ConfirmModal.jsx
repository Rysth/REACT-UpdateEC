import { Button, Modal } from 'flowbite-react'
import PropTypes from 'prop-types'
import React from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const ConfirmModal = ({ isOpen, onClose, onConfirm, title }) => {
  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup dismissible className="z-[10000]">
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="w-32 h-32 mx-auto mb-4 text-red-700 " />
          <h3 className="mb-5 text-lg font-bold text-gray-900 ">{title}</h3>
          <div className="flex justify-center gap-2">
            <Button color="failure" onClick={onConfirm}>
              Confirmar
            </Button>
            <Button color="gray" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default ConfirmModal
