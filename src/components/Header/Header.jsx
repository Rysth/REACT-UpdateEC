import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/SVG/logo.svg'
import NavBar from './NavBar/NavBar'
import { sessionActions } from '../../redux/slices/sessionSlice'

function Header() {
  const dispatch = useDispatch()
  const { active } = useSelector((store) => store.session)
  const [isOpen, setIsOpen] = useState(false)
  const handleNavigationBar = () => setIsOpen(!isOpen)
  const closeNavigationBar = () => setIsOpen(false)

  const closeUserSession = () => {
    dispatch(sessionActions.destroySession())
  }

  useEffect(() => {}, [active])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 z-[1001] w-full backdrop-blur-2xl"
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-white md:py-5">
        <div className="flex items-center gap-8">
          <a href="/" rel="nonopenner" aria-label="Home page">
            <img src={Logo} alt="UpdateEC brand logo" className="w-20 bg-transparent sm:w-28" />
          </a>
          <NavBar classList="hidden sm:flex font-semibold items-center gap-5 text-xs" navClassList="" />
        </div>
        <button type="button" className="sm:hidden" onClick={handleNavigationBar} aria-label="toggleButton">
          <i className="w-full h-full text-2xl fa-solid fa-bars" />
        </button>
        {isOpen && (
          <>
            <NavBar
              classList="bg-white my-3 rounded rounded-md flex flex-col basis-full sm:hidden text-sm p-2"
              navClassList="text-black p-2"
              handleNavigationBar={closeNavigationBar}
            />
            {!active ? (
              <div className="flex items-center justify-end w-full gap-2 sm:hidden">
                <NavLink
                  to="/sign_in"
                  className="p-2 px-4 text-xs text-white underline rounded-full md:transition md:hover:scale-105 md:active:scale-95"
                  onClick={handleNavigationBar}
                  type="button"
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to="/sign_up"
                  className="p-2 px-4 text-xs text-white rounded-full bg-purple md:transition md:hover:scale-105 md:active:scale-95"
                  onClick={handleNavigationBar}
                >
                  Registrarse
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center justify-end w-full gap-2 sm:hidden">
                <button
                  type="button"
                  className="p-2 px-4 text-xs text-white rounded-full bg-purple md:transition md:hover:scale-105 md:active:scale-95"
                  onClick={closeUserSession}
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </>
        )}
        {!active ? (
          <div className="items-center hidden gap-1 sm:flex">
            <NavLink
              to="/sign_in"
              className="p-2 px-4 text-xs text-white border border-transparent rounded-full md:transition md:hover:scale-105 md:active:scale-95"
            >
              Iniciar Sesión
            </NavLink>
            <a
              href="/sign_up"
              className="p-2 px-4 text-xs text-white border border-transparent rounded-full bg-purple md:transition md:hover:scale-105 md:active:scale-95"
            >
              Registrarse
            </a>
          </div>
        ) : (
          <div className="items-center hidden gap-1 sm:flex">
            <button
              type="button"
              className="p-2 px-4 text-xs text-white border border-transparent rounded-full bg-purple md:transition md:hover:scale-105 md:active:scale-95"
              onClick={closeUserSession}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
