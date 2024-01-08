import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ConfirmModal from '../../../components/modal/ConfirmModal/ConfirmModal'
import SectionLayout from '../../../layouts/SectionLayout'
import { cartActions } from '../../../redux/slices/cartSlice'
import TableItem from '../components/TableItem'

function TableSection({ cartItems }) {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [itemToRemove, setItemToRemove] = useState({})

  const confirmRemove = () => {
    dispatch(cartActions.removeItemFromCart(itemToRemove.id))
    setOpenModal(false)
  }

  return (
    <SectionLayout>
      <ConfirmModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmRemove}
        title="¿Desea eliminar el producto?"
      />
      <article className="max-w-screen-xl pt-8 mx-auto space-y-4">
        <header className="grid gap-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Carrito de Compras</h2>
        </header>
        <main className="sm:min-h-[24rem]">
          <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg max-h-96">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-16 py-3 w-1/6 min-w-[5rem]">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3 min-w-[15rem] w-2/6">
                    Producto
                  </th>
                  <th scope="col" className="w-1/6 px-6 py-3">
                    Cantidad
                  </th>
                  <th scope="col" className="w-1/6 px-6 py-3">
                    Precio
                  </th>
                  <th scope="col" className="w-1/6 px-6 py-3">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product, index) => (
                  <TableItem
                    product={product}
                    key={index}
                    showModal={setOpenModal}
                    setProductToRemove={setItemToRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </article>
    </SectionLayout>
  )
}

TableSection.propTypes = {
  cartItems: PropTypes.array.isRequired,
}

export default TableSection