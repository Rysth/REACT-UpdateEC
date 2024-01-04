import { Button, Navbar } from 'flowbite-react'
import { HiBars3BottomRight, HiOutlineShoppingCart, HiOutlineHeart } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import BrandImage from '../../../assets/SVG/brand.svg'

function NavigationBar() {
  const { cartItems } = useSelector((store) => store.cart)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <Navbar className="items-center max-w-screen-xl p-4 mx-auto bg-transparent backdrop-blur-2xl">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex items-center">
          <Button color="purple" className="text-gray-900 bg-transparent hover:!bg-transparent group" size="sm">
            <HiOutlineShoppingCart className="text-xl group-hover:text-violet-600" />
            <p className="absolute grid w-5 h-5 bg-red-600 rounded-full place-items-center right-0 -top-0.5">
              {totalQuantity}
            </p>
          </Button>
          <Button color="purple" className="text-gray-900 bg-transparent hover:!bg-transparent group" size="sm">
            <HiOutlineHeart className="text-xl group-hover:text-violet-600" />
          </Button>
          <Button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            size="sm"
            color="purple"
            className="text-gray-900 bg-transparent hover:!bg-transparent hover:text-violet-600"
          >
            <HiBars3BottomRight className="mr-1 text-xl" />
            <span>Menu</span>
          </Button>
        </div>
      </Navbar>
    </header>
  )
}

export default NavigationBar
