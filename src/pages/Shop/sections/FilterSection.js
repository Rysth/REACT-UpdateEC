import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slices/categorySlice';
import { fetchBrands } from '../../../redux/slices/brandSlice';

function FilterSection() {
  const dispatch = useDispatch();
  const { categoriesArray } = useSelector((store) => store.category);
  const { brandsArray } = useSelector((store) => store.brand);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <aside className="sm:w-52 purple">
      <form action="" className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <fieldset>
          <legend className="w-full py-2 mb-5 text-base font-semibold text-center sm:text-lg bg-purple">
            Categorías
          </legend>
          <div className="max-h-[8rem] overflow-auto">
            {categoriesArray.map((category) => (
              <label
                key={category.id}
                className="flex items-center justify-between p-2 text-sm md:hover:bg-indigo-700 md:transition md:cursor-pointer"
                htmlFor={category.id}
              >
                {category.attributes.name}
                <input
                  type="checkbox"
                  value={category.id}
                  id={category.id}
                  className="w-5 h-5 text-xl border-none rounded-md outline-none"
                />
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="w-full py-2 mb-5 text-base font-semibold text-center sm:text-lg bg-purple">
            Marcas
          </legend>
          <div className="max-h-[8rem] overflow-auto">
            {brandsArray.map((brand) => (
              <label
                key={brand.id}
                className="flex items-center justify-between p-2 text-sm md:hover:bg-indigo-700 md:transition md:cursor-pointer"
                htmlFor={brand.attributes.slug}
              >
                {brand.attributes.name}
                <input
                  type="checkbox"
                  value={brand.id}
                  id={brand.attributes.slug}
                  className="w-5 h-5 text-xl border-none rounded-md outline-none"
                />
              </label>
            ))}
          </div>
        </fieldset>
      </form>
    </aside>
  );
}

export default FilterSection;
