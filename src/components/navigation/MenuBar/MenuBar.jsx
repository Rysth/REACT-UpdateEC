import { Button } from 'flowbite-react'
import React from 'react'
import { HiXMark, HiHome } from 'react-icons/hi2'

function MenuBar() {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-[1000] w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-purple "
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <header className="flex items-center justify-between">
        <h5 id="drawer-navigation-label" className="text-xl font-semibold text-white uppercase ">
          Menu
        </h5>
        <Button
          type="button"
          size="xs"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          color="failure"
        >
          <HiXMark className="text-lg" />
          <span className="sr-only">Close menu</span>
        </Button>
      </header>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="flex items-center p-2 text-sm text-white transition rounded-lg hover:bg-white group">
              <HiHome className="w-5 h-5 text-xl text-white transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3 group-hover:text-gray-900">Inicio</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuBar
