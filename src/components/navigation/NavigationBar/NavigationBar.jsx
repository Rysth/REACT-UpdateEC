import { Button, Dropdown, Navbar } from 'flowbite-react'
import { useState } from 'react'
import { HiLogout } from 'react-icons/hi'
import { HiListBullet, HiMiniBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser, HiUser } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import BrandImage from '../../../assets/SVG/brand.svg'
import { sessionActions } from '../../../redux/slices/sessionSlice'
import ConfirmModal from '../../modal/ConfirmModal/ConfirmModal'

function NavigationBar() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { active, userData } = useSelector((store) => store.session)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  const [openModal, setOpenModal] = useState(false)

  const onLogoutSession = () => {
    setOpenModal(false)
    dispatch(sessionActions.destroySession())
  }

  return (
    <header className="relative top-0 w-full z-[9999] animate__animated animate__fadeInDown p-2 md:px-4 shadow-md shadow-black/5 bg-white">
      <ConfirmModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={onLogoutSession}
        title="¿Desea cerrar sesión?"
      />
      <Navbar className="items-center max-w-screen-xl mx-auto bg-transparent rounded-md">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-32" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center md:order-2 ">
          <Button
            href="/cart"
            color="dark"
            size="sm"
            className="text-gray-900 bg-transparent hover:!bg-transparent group focus:ring-0 "
          >
            <HiOutlineShoppingBag className="text-2xl transition group-hover:text-blue-700" />
            <p className="absolute grid w-5 h-5 bg-red-600 text-white  rounded-full place-items-center right-2 sm:right-2 bottom-0.5 text-xs">
              {totalQuantity}
            </p>
          </Button>
          {active ? (
            <Dropdown
              renderTrigger={() => (
                <Button
                  color="dark"
                  size="sm"
                  className="text-gray-900   bg-transparent hover:!bg-transparent group focus:ring-0 "
                >
                  <HiUser className="text-2xl transition group-hover:text-blue-700" />
                </Button>
              )}
            >
              <Dropdown.Header>
                <span className="block text-sm font-bold ">{userData.username}</span>
                <span className="block text-xs font-medium truncate">{userData.email}</span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiListBullet} href="/orders">
                Ordenes
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout} className="text-red-600" onClick={() => setOpenModal(true)}>
                Cerrar Sesión
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Button href="/sign_in" className="text-gray-900  bg-transparent hover:!bg-transparent group focus:ring-0">
              <HiOutlineUser className="p-0 text-2xl transition group-hover:text-blue-700" />
            </Button>
          )}
          <Navbar.Toggle
            barIcon={HiMiniBars3BottomRight}
            className="text-gray-900  !bg-transparent focus:ring-0 hover:text-blue-700"
          />
        </div>
        <Navbar.Collapse className="p-2 transition md:p-0">
          <Navbar.Link
            href="/"
            className="hover:bg-gray-900 md:hover:!text-blue-700 bg-white md:bg-transparent text-blue-700 md:text-gray-900 mb-1 md:mb-0 font-semibold rounded-md border-transparent"
          >
            Inicio
          </Navbar.Link>
          <Navbar.Link
            href="/shop"
            className="hover:bg-gray-900 md:hover:!text-blue-700 bg-white md:bg-transparent text-blue-700 md:text-gray-900 md:mb-0 font-semibold rounded-md border-transparent"
          >
            Tienda
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            className="hover:bg-gray-900 md:hover:!text-blue-700 bg-white md:bg-transparent text-blue-700 md:text-gray-900 md:mb-0 font-semibold rounded-md border-transparent"
          >
            Nosotros
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavigationBar
