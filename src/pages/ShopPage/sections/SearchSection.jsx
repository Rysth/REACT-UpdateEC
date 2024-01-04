import PropTypes from 'prop-types'
import { productActions } from '../../../redux/slices/productSlice'
import { TextInput } from 'flowbite-react'
import SectionLayout from '../../../layouts/SectionLayout'

function SearchSection({ selectedIDs, dispatch }) {
  const onChangeSearch = (event) => {
    setTimeout(() => {
      dispatch(
        productActions.searchAndFilterProducts({
          searchData: event.target.value,
          categoryIDs: selectedIDs.category, // Use selectedIDs directly
          brandIDs: selectedIDs.brand, // Use selectedIDs directly
        }),
      )
    }, 500)
  }

  return (
    <div className="grid w-full gap-4 my-4 sm:justify-between sm:flex sm:flex-row sm:items-center">
      <header className="text-center sm:my-16">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-5xl">Búsqueda</h2>
      </header>
      <ul className="gap-3">
        <li className="block text-sm">
          <TextInput
            type="text"
            id="search_data"
            name="search_data"
            onChange={onChangeSearch}
            className="block w-full p-2 text-black min-w-[20rem]"
            placeholder="Buscar..."
          />
        </li>
      </ul>
    </div>
  )
}

SearchSection.propTypes = {
  selectedIDs: PropTypes.shape({
    category: PropTypes.array.isRequired,
    brand: PropTypes.array.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default SearchSection
