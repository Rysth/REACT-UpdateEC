import { HiTrash } from 'react-icons/hi2'
import { Button } from 'flowbite-react'

function CartItem() {
  return (
    <div className="flex flex-wrap overflow-hidden border rounded-lg gap-x-3 sm:gap-y-4 h-28">
      <a href="#" className="relative block h-full overflow-hidden bg-gray-100 w-28 group">
        <img
          src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
          loading="lazy"
          alt="Photo by Thái An"
          className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex flex-col justify-between flex-1 px-2 py-4 lg:text-sm">
        <a href="#" className="block font-bold text-gray-800 transition duration-100 hover:text-gray-500">
          Mouse Logitech G203
        </a>

        <span className="block text-xs text-gray-500">Cantidad: 5</span>
        <footer className="flex items-center justify-between">
          <span className="block font-bold text-gray-800 md:text-lg">$15.00</span>
          <Button
            type="button"
            color="failure"
            size="xs"
            className="inline-flex items-center justify-center px-0 my-0 text-2xl text-white rounded-lg"
          >
            <HiTrash />
          </Button>
        </footer>
      </div>
    </div>
  )
}

export default CartItem
