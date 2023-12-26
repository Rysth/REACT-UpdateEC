import { Button, Navbar } from 'flowbite-react'
import { HiBars3BottomRight, HiOutlineShoppingCart } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import BrandImage from '../../assets/SVG/brand.svg'
import { sessionActions } from '../../redux/slices/sessionSlice'

function NavigationBar() {
  const dispatch = useDispatch()
  const { active } = useSelector((store) => store.session)
  const { cartItems } = useSelector((store) => store.cart)

  const onDestroySession = () => dispatch(sessionActions.destroySession())

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className=" bg-[#271033] sticky top-0 z-50">
      <Navbar className="items-center max-w-screen-xl p-4 mx-auto bg-transparent backdrop-blur-2xl">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center gap-2">
          <Button className="relative px-0 bg-transparent" color="purple" size="xs">
            <HiOutlineShoppingCart className="mr-1 text-xl" />
            <p className="absolute grid w-5 h-5 bg-red-600 rounded-full place-items-center right-0.5 -top-1">
              {totalQuantity}
            </p>
          </Button>
          {!active ? (
            <Button size="xs" color="purple" className="px-0 text-white bg-transparent">
              <HiBars3BottomRight className="mr-1 text-xl" />
              Menú
            </Button>
          ) : (
            <Button
              gradientDuoTone="pinkToOrange"
              className="p-2 transition rounded-full"
              size="xs"
              onClick={onDestroySession}
            >
              Cerrar Sesión
            </Button>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default NavigationBar
