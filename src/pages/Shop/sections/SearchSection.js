import PropTypes from 'prop-types';
import { productActions } from '../../../redux/slices/productSlice';

function SearchSection({ selectedIDs, dispatch }) {
  const onChangeSearch = (event) => {
    setTimeout(() => {
      dispatch(
        productActions.searchAndFilterProducts({
          searchData: event.target.value,
          categoryIDs: selectedIDs.category, // Use selectedIDs directly
          brandIDs: selectedIDs.brand, // Use selectedIDs directly
        }),
      );
    }, 500);
  };

  return (
    <div className="flex items-center justify-between sm:flex-row">
      <header className="my-8 text-center sm:my-16">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">Búsqueda</h2>
      </header>
      <ul className="flex items-center gap-3">
        <li className="text-xs">
          <label htmlFor="order_by" className="flex items-center gap-2">
            Buscar:
            <input
              type="text"
              id="search_data"
              name="search_data"
              onChange={onChangeSearch}
              className="p-2 text-black"
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

SearchSection.propTypes = {
  selectedIDs: PropTypes.shape({
    category: PropTypes.element.isRequired,
    brand: PropTypes.element.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SearchSection;
