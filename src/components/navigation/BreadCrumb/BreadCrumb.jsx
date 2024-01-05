import { Breadcrumb } from 'flowbite-react'
import PropTypes from 'prop-types'
import React from 'react'
import SectionLayout from '../../../layouts/SectionLayout'

function BreadCrumb({ paths }) {
  return (
    <SectionLayout backgroundColor="bg-purple">
      <article className="max-w-screen-xl py-12 mx-auto">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/">
            <span className="text-gray-300 transition duration-300 hover:text-cyan-400">Inicio</span>
          </Breadcrumb.Item>
          {paths.map((path, index) => (
            <Breadcrumb.Item key={index} href={path.href}>
              <span
                className={path.active ? 'text-white' : 'text-gray-300 transition duration-300 hover:text-cyan-400'}
              >
                {path.name}
              </span>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </article>
    </SectionLayout>
  )
}

BreadCrumb.propTypes = {
  // Define the propTypes for the paths prop
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Name of the breadcrumb item
      href: PropTypes.string.isRequired, // URL the breadcrumb item should link to
      active: PropTypes.bool, // Optional boolean to indicate if the breadcrumb item is the current page
    }),
  ).isRequired,
}

export default BreadCrumb
