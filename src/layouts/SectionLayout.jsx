import PropTypes from 'prop-types'
import React from 'react'

function SectionLayout({ children, backgroundColor }) {
  return <section className={`p-4 ${backgroundColor}`}>{children}</section>
}

SectionLayout.propTypes = {
  children: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
}

export default SectionLayout
