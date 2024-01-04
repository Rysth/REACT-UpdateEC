import { Button, Navbar } from 'flowbite-react'
import { HiMiniBars3BottomRight, HiOutlineShoppingBag } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import BrandImage from '../../../assets/SVG/brand.svg'

function NavigationBar() {
  const { cartItems } = useSelector((store) => store.cart)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-b-gray-100 animate__animated animate__bounceInDown animate__slow">
      <Navbar className="items-center max-w-screen-xl p-4 mx-auto bg-transparent backdrop-blur-2xl">
        <Navbar.Brand href="/">
          <img src={BrandImage} className="w-24 sm:w-32" alt="UpdateEC's logo brand" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            href="#"
            color="dark"
            className="text-gray-900 bg-transparent hover:!bg-transparent group focus:ring-0"
          >
            <HiOutlineShoppingBag className="text-2xl transition sm:text-3xl group-hover:text-violet-700" />
            <p className="absolute grid w-5 h-5 sm:w-6 sm:h-6 bg-red-600 text-white rounded-full place-items-center right-2 sm:right-2.5 bottom-0.5">
              {totalQuantity}
            </p>
          </Button>
          <Navbar.Toggle
            barIcon={HiMiniBars3BottomRight}
            className="text-gray-900 !bg-transparent focus:ring-0 hover:text-violet-700"
          />
        </div>
        <Navbar.Collapse className="transition animate__animated animate__fadeIn">
          <Navbar.Link href="/" className="hover:!text-violet-700 text-gray-900 uppercase">
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/shop" className="hover:!text-violet-700 text-gray-900 uppercase">
            Tienda
          </Navbar.Link>
          <Navbar.Link href="#" className="hover:!text-violet-700 text-gray-900 uppercase">
            Nosotros
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavigationBar
