import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { sessionActions } from '../../../redux/slices/sessionSlice'

function MenuBarLogout() {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const onDestroySession = () => {
    dispatch(sessionActions.destroySession())
    setOpenModal(false)
  }

  return (
    <>
      <Modal show={openModal} size="sm" onClose={() => setOpenModal(false)} popup ca>
        <Modal.Header className="bg-purple" />
        <Modal.Body className="rounded-b bg-purple">
          <div className="text-center">
            <HiOutlineExclamationCircle className="w-32 h-32 mx-auto mb-4 text-white " />
            <h3 className="mb-5 text-lg font-normal text-white">¿Desea Cerrar Sesión?</h3>
            <div className="flex justify-center gap-2">
              <Button color="blue" onClick={onDestroySession}>
                Confirmar
              </Button>
              <Button color="failure" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Button color="failure" onClick={() => setOpenModal(true)}>
        Cerrar Sesión
      </Button>
    </>
  )
}

export default MenuBarLogout
