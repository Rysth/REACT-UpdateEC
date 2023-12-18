import PropTypes from 'prop-types'

/* eslint-disable */
function FilterGroup({ title, data, onSelect }) {
  const handleCheckboxChange = (itemId) => {
    onSelect(itemId)
  }

  return (
    <fieldset>
      <legend className="w-full py-2 mb-5 text-sm font-semibold text-center sm:text-lg bg-purple">{title}</legend>
      <div className="max-h-[8rem] overflow-auto">
        {data.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between p-1 text-sm md:hover:bg-indigo-700 md:transition md:cursor-pointer"
            htmlFor={item.attributes.slug}
          >
            {item.attributes.name}
            <input
              type="checkbox"
              value={item.id}
              id={item.attributes.slug}
              className="w-5 h-5 text-xl border-none rounded-md outline-none"
              onChange={() => handleCheckboxChange(item.id)}
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default FilterGroup
