import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className=""
    >
      <footer className="text-white body-font">
        <div className="container flex flex-col items-center justify-between max-w-screen-xl px-4 py-8 mx-auto sm:flex-row">
          <a className="flex items-center justify-center font-medium title-font md:justify-start" href="/">
            <span className="text-xl">UpdateEC</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
            © 2023 UpdateEC —
            <a href="https://github.com/Rysth" className="ml-1 " rel="noopener noreferrer" target="_blank">
              @rysthcraft
            </a>
          </p>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
