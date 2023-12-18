import { Button, Navbar } from 'flowbite-react'
import BrandImage from '../../assets/SVG/brand.svg'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar className="items-center py-3 bg-gray-900">
      <Navbar.Brand href="/">
        <img src={BrandImage} className="w-24 sm:w-32" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex items-center gap-2 sm:gap-6 md:order-2">
        <Navbar.Link className="hidden py-2 text-xs text-white cursor-pointer sm:inline-block md:hover:text-cyan-300 md:transition">
          Iniciar Sesión
        </Navbar.Link>
        <Button gradientDuoTone="purpleToBlue" className="p-2 transition rounded-full" size="xs">
          Registrarse
        </Button>
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
          to="/tienda"
          className="text-sm text-white border-0 border-none sm:py-2 md:text-xs md:inline-block md:hover:text-cyan-300 md:transition hover:bg-purple"
        >
          Tienda
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
