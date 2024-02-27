import { Modal, TextInput } from 'flowbite-react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

const SearchModal = ({ isOpen, onCloseModal }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Modal show={isOpen} size="sm" onClose={onCloseModal} className="z-[1000]" popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl">Consultar Productos</h3>
          <TextInput
            id="search"
            placeholder="Buscar..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            required
          />
          <div className="w-full">
            <a href={`/shop/${searchValue}`} className="flex items-center gap-1 ml-auto btn !text-white !btn-primary">
              Buscar
              <IoMdSearch className="ml-1 text-xl" />
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

SearchModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.bool.isRequired,
}

export default SearchModal
