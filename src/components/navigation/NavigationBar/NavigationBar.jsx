import { Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { HiLogout, HiOutlineSearch, HiSearch } from 'react-icons/hi'
import { HiListBullet, HiMiniBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser, HiUser } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosStats } from 'react-icons/io'
import BrandImage from '../../../assets/SVG/brand.svg'
import { sessionActions } from '../../../redux/slices/sessionSlice'
import ConfirmModal from '../../modal/ConfirmModal/ConfirmModal'
import SearchModal from '../../modal/SearchModal/SearchModal'

function NavigationBar() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { active, userData, isAdmin } = useSelector((store) => store.session)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  const [openModal, setOpenModal] = useState(false)

  const [searchModal, setSearchModal] = useState(false)

  const onLogoutSession = () => {
    setOpenModal(false)
    dispatch(sessionActions.destroySession())
  }

  return (
    <header className="relative top-0 w-full z-[1000] animate__animated animate__fadeInDown p-2 md:px-4 shadow-md shadow-black/5 bg-white">
      <ConfirmModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={onLogoutSession}
        title="¿Desea cerrar sesión?"
      />
      <SearchModal isOpen={searchModal} onCloseModal={() => setSearchModal(false)} />
      <Navbar className="items-center max-w-screen-xl mx-auto bg-transparent rounded-md">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-32" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center md:order-2 ">
          <button onClick={() => setSearchModal(true)} className="btn btn-ghost group">
            <span className="sr-only">Toggle modal</span>
            <HiOutlineSearch className="text-2xl transition" />
          </button>
          <a href="/cart" size="sm" className="relative btn btn-ghost group">
            <HiOutlineShoppingBag className="text-2xl transition" />
            <p className="absolute bottom-0 grid w-5 h-5 text-xs text-white rounded-full right-2 bg-violet-600 place-items-center">
              {totalQuantity}
            </p>
          </a>
          {active ? (
            <Dropdown
              renderTrigger={() => (
                <button size="sm" className="btn btn-ghost">
                  <HiUser className="text-2xl transition text-violet-700" />
                </button>
              )}
            >
              <Dropdown.Header>
                <span className="block text-sm font-bold ">{userData.username}</span>
                <span className="block text-xs font-medium truncate">{userData.email}</span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiListBullet} href="/orders">
                Ordenes
              </Dropdown.Item>
              {isAdmin && (
                <Dropdown.Item icon={IoIosStats} href="/admin/estadisticas">
                  Resúmen Estadístico
                </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout} className="text-red-600" onClick={() => setOpenModal(true)}>
                Cerrar Sesión
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <a href="/sign_in" className="group btn btn-ghost">
              <HiOutlineUser className="p-0 text-2xl transition " />
            </a>
          )}
          <Navbar.Toggle barIcon={HiMiniBars3BottomRight} className="text-gray-900  !bg-transparent focus:ring-0" />
        </div>
        <Navbar.Collapse>
          <div className="flex flex-col items-center justify-center w-full gap-2 sm:flex-row">
            <a href="/" className="btn btn-ghost btn-sm hover:!text-violet-700 sm:w-20">
              Inicio
            </a>
            <a href="/shop" className="btn btn-ghost btn-sm hover:!text-violet-700 sm:w-20">
              Tienda
            </a>
            <a href="/about" className="btn btn-ghost btn-sm hover:!text-violet-700 sm:w-20">
              Nosotros
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavigationBar
