import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchBrands } from '../../../redux/slices/brandSlice';
import FilterGroup from '../components/FilterGroup';

function FilterSection({ handleCheck }) {
  const dispatch = useDispatch();
  const categoriesArray = useSelector(
    (state) => state.category.categoriesArray,
  );
  const brandsArray = useSelector((state) => state.brand.brandsArray);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <aside className="sm:w-52 purple">
      <form action="" className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <FilterGroup
          title="Categorías"
          data={categoriesArray}
          onSelect={(id) => handleCheck(id, 'category')}
        />
        <FilterGroup
          title="Marcas"
          data={brandsArray}
          onSelect={(id) => handleCheck(id, 'brand')}
        />
      </form>
    </aside>
  );
}

FilterSection.propTypes = {
  handleCheck: PropTypes.func.isRequired,
};

export default FilterSection;
