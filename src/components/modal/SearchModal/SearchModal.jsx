import { Modal, TextInput } from 'flowbite-react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { IoIosSearch, IoMdSearch } from 'react-icons/io'
import UndrawImage from '../../../assets/SVG/illustrations/undraw_search.svg'

const SearchModal = ({ isOpen, onCloseModal }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Modal show={isOpen} size="sm" onClose={onCloseModal} className="z-[1000]" popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <IoIosSearch className="w-16 h-16 mx-auto text-white rounded-full bg-primary" />
            <h3 className="w-4/6 text-2xl text-center">Buscar Producto</h3>
          </div>
          <TextInput
            id="search"
            value={searchValue}
            placeholder="Mouse.."
            onChange={(event) => setSearchValue(event.target.value)}
            required
          />
          <div className="flex justify-end w-full">
            <a href={`/shop/${searchValue}`} className="btn !text-white !btn-primary">
              Buscar
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
