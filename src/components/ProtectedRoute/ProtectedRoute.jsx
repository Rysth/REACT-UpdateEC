import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isAllowed, children, redirectTo }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }
  return children
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
}

export default ProtectedRoute
