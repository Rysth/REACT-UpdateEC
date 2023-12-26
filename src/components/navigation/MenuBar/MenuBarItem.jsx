import PropTypes from 'prop-types'

function MenuBarItem({ title, path, icon: Icon }) {
  return (
    <li>
      <a href={path} className="flex items-center p-2 text-sm text-white transition rounded-lg hover:bg-white group">
        <Icon className="w-5 h-5 text-white transition duration-75 group-hover:text-gray-900" />
        <span className="ms-3 group-hover:text-gray-900">{title}</span>
      </a>
    </li>
  )
}

MenuBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
}

export default MenuBarItem
