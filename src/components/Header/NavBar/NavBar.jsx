import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import './NavBar.css'

const routes = [
  {
    id: 1,
    to: '/',
    text: 'Inicio',
    icon: <GoHomeFill />,
  },
  {
    id: 2,
    to: '/shop',
    text: 'Tienda',
    icon: <FaStar />,
  },
]

function NavBar({ classList, navClassList, handleNavigationBar }) {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }} className={classList}>
      {routes.map((route) => (
        <NavLink key={route.id} to={route.to} className={navClassList} onClick={handleNavigationBar}>
          <span className="text-lg sm:hidden">{route.icon}</span>
          {route.text}
        </NavLink>
      ))}
    </motion.nav>
  )
}

NavBar.defaultProps = {
  handleNavigationBar: () => {},
}

NavBar.propTypes = {
  classList: PropTypes.string.isRequired,
  navClassList: PropTypes.string.isRequired,
  handleNavigationBar: PropTypes.func,
}

export default NavBar
