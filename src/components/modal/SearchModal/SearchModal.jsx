import { Modal, TextInput } from 'flowbite-react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const SearchModal = ({ isOpen, onCloseModal }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      window.location.href = `/shop/${searchValue}`
      return
    } else {
      toast.error('Porfavor, escriba un valor a buscar.', { autoClose: 1500 })
    }
  }

  return (
    <Modal show={isOpen} size="sm" onClose={onCloseModal} className="z-[1000]" popup dismissible>
      <Modal.Body className="rounded-lg bg-gradient-to-br from-violet-700 to-indigo-700">
        <div className="space-y-6 pt-7">
          <div className="flex items-center justify-center text-white">
            <h3 className="text-2xl font-bold md:text-3xl">Consultar Productos</h3>
          </div>
          <TextInput
            id="search"
            value={searchValue}
            sizing="lg"
            placeholder="Buscar producto..."
            onChange={(event) => setSearchValue(event.target.value)}
            className="w-full mt-4 border-gray-300 rounded-lg"
            required
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSearch}
              className="px-6 py-3 transition duration-300 bg-white rounded-lg text-primary hover:bg-neutral hover:text-white"
            >
              Buscar
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

SearchModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default SearchModal
