import { Button } from 'flowbite-react'
import React from 'react'
import { HiBuildingStorefront, HiHome, HiXMark } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import MenuBarItem from './MenuBarItem'
import MenuBarLogout from './MenuBarLogout'

function MenuBar() {
  const { active } = useSelector((store) => store.session)

  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-[1000] w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-purple flex flex-col"
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
      <div className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <MenuBarItem title="Inicio" path="/" icon={HiHome} />
          <MenuBarItem title="Tienda" path="/shop" icon={HiBuildingStorefront} />
        </ul>
      </div>
      <footer className="grid gap-2">
        {active ? (
          <MenuBarLogout />
        ) : (
          <>
            <Button href="/sign_in" color="light" fullSized>
              Iniciar Sesión
            </Button>
            <Button href="/sign_up" color="purple" fullSized>
              Registrarse
            </Button>
          </>
        )}
      </footer>
    </div>
  )
}

export default MenuBar
