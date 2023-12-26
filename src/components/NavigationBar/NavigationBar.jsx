import { useState } from 'react'
import { Button, Navbar } from 'flowbite-react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sessionActions } from '../../redux/slices/sessionSlice'
import { HiShoppingBag } from 'react-icons/hi2'
import BrandImage from '../../assets/SVG/brand.svg'
import Cart from '../Cart/Cart'

function NavigationBar() {
  const dispatch = useDispatch()
  const { active } = useSelector((store) => store.session)
  const { cartItems } = useSelector((store) => store.cart)
  const [openCart, setOpenCart] = useState()

  const showCart = () => setOpenCart(true)
  const closeCart = () => setOpenCart(false)

  const onDestroySession = () => dispatch(sessionActions.destroySession())

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className=" bg-[#212529] sticky top-0 z-50">
      <Navbar className="items-center max-w-screen-xl p-4 mx-auto bg-transparent backdrop-blur-2xl">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center gap-2 sm:gap-3 md:order-2">
          {!active ? (
            <>
              <Button
                as={NavLink}
                to="/sign_in"
                size="xs"
                className="px-0 py-2 text-xs text-white bg-transparent cursor-pointer sm:inline-block md:hover:text-cyan-300 md:transition"
                pill
              >
                Iniciar Sesión
              </Button>
              <Button
                gradientDuoTone="purpleToBlue"
                className="p-2 transition rounded-full"
                size="xs"
                as={Link}
                to="/sign_up"
              >
                Registrarse
              </Button>
            </>
          ) : (
            <>
              <Button className="p-0 transition bg-transparent rounded-full " color="dark" size="xs" onClick={showCart}>
                <HiShoppingBag className="mr-1 text-xl" />
                <span>{totalQuantity}</span>
              </Button>
              <Button
                gradientDuoTone="pinkToOrange"
                className="p-2 transition rounded-full"
                size="xs"
                onClick={onDestroySession}
              >
                Cerrar Sesión
              </Button>
            </>
          )}
          <Navbar.Toggle className="text-white active:bg-transparent hover:bg-transparent" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            as={NavLink}
            to="/"
            className="text-sm text-white border-0 border-none sm:py-2 md:text-xs md:inline-block md:hover:text-cyan-300 md:transition hover:bg-purple"
          >
            Inicio
          </Navbar.Link>
          <Navbar.Link
            as={NavLink}
            to="/shop"
            className="text-sm text-white border-0 border-none sm:py-2 md:text-xs md:inline-block md:hover:text-cyan-300 md:transition hover:bg-purple"
          >
            Tienda
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {openCart && <Cart closeCart={closeCart} />}
    </header>
  )
}

export default NavigationBar
