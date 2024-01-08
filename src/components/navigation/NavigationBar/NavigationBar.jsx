import { Button, Dropdown, Navbar, Tooltip } from 'flowbite-react'
import { useState } from 'react'
import {
  HiMiniArrowLeftOnRectangle,
  HiMiniBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiUserCircle,
  HiUser,
  HiListBullet,
} from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import BrandImage from '../../../assets/SVG/brand.svg'
import { sessionActions } from '../../../redux/slices/sessionSlice'
import ConfirmModal from '../../modal/ConfirmModal/ConfirmModal'
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi'

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
    <header className="sticky top-0 z-[999] bg-white border-b border-b-gray-100 animate__animated animate__fadeIn animate__slow">
      <ConfirmModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={onLogoutSession}
        title="¿Desea cerrar sesión?"
      />
      <Navbar className="items-center max-w-screen-xl p-4 mx-auto bg-transparent backdrop-blur-2xl">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-32" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center md:order-2 ">
          <Tooltip content="Carrito de Compras" placement="bottom" className="hidden text-center sm:visible">
            <Button
              href="/cart"
              color="dark"
              size="sm"
              className="text-gray-900 bg-transparent hover:!bg-transparent group focus:ring-0 "
            >
              <HiOutlineShoppingBag className="text-2xl transition group-hover:text-violet-700" />
              <p className="absolute grid w-5 h-5 bg-red-600 text-white rounded-full place-items-center right-2 sm:right-2 bottom-0.5 text-xs">
                {totalQuantity}
              </p>
            </Button>
          </Tooltip>
          {active ? (
            <Tooltip content="Cuenta" placement="bottom" className="hidden text-center sm:visible">
              <Dropdown
                renderTrigger={() => (
                  <Button
                    color="dark"
                    size="sm"
                    className="text-gray-900 bg-transparent hover:!bg-transparent group focus:ring-0 "
                  >
                    <HiUser className="text-2xl transition group-hover:text-violet-700" />
                  </Button>
                )}
              >
                <Dropdown.Header>
                  <span className="block text-sm font-bold text-gray-900">{userData.username}</span>
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
            </Tooltip>
          ) : (
            <Tooltip content="Iniciar Sesión" placement="bottom" className="hidden text-center sm:visible">
              <Button href="/sign_in" className="text-gray-900 bg-transparent hover:!bg-transparent group focus:ring-0">
                <HiOutlineUser className="p-0 text-2xl transition group-hover:text-violet-700" />
              </Button>
            </Tooltip>
          )}
          <Navbar.Toggle
            barIcon={HiMiniBars3BottomRight}
            className="text-gray-900 !bg-transparent focus:ring-0 hover:text-violet-700"
          />
        </div>
        <Navbar.Collapse className="transition animate__animated animate__fadeIn">
          <Navbar.Link href="/" className="hover:!text-violet-700 text-gray-900">
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/shop" className="hover:!text-violet-700 text-gray-900">
            Tienda
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavigationBar
