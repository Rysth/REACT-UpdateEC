import PropTypes from 'prop-types'

function SessionPage({ children }) {
  return (
    <section className="h-[675px]">
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-[55%_1fr] h-full">
        <header className="flex flex-col items-center justify-center h-full gap-1 text-white bg-purple max-h-40 sm:max-h-full">
          <h2 className="text-4xl font-bold md:text-6xl lg:text-7xl">¡Bienvenido!</h2>
          <p className="sm:text-2xl">e-Commerce</p>
        </header>
        <div className="flex flex-col items-center justify-center h-full text-white">{children}</div>
      </div>
    </section>
  )
}

SessionPage.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SessionPage
