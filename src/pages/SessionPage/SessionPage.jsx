import PropTypes from 'prop-types'
import BackgroundImage from '../../assets/PNG/session/background.jpg'

function SessionPage({ children }) {
  return (
    <section className="relative flex flex-col h-screen max-w-screen-xl mx-auto lg:flex-row">
      <div className="absolute top-0 bottom-0 z-10 w-full h-full lg:relative lg:w-3/5 brightness-50 lg:brightness-100">
        <img
          src={BackgroundImage}
          alt=""
          className="absolute inset-0 bottom-0 object-cover object-center w-full h-full"
        />
      </div>
      <div className="z-20 flex flex-col items-center justify-center h-full px-4 lg:bg-white lg:w-2/5">{children}</div>
    </section>
  )
}

SessionPage.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SessionPage
