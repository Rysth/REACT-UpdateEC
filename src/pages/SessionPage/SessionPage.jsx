import PropTypes from 'prop-types'

function SessionPage({ children }) {
  return (
    <section className="h-[600px] sm:h-[700px]">
      <div className="flex flex-col items-center justify-center h-full px-4 bg-purple">{children}</div>
    </section>
  )
}

SessionPage.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SessionPage
