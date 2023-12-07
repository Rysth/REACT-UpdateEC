import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/slices/categorySlice';

const marcas = ['Asus', 'MSI', 'Meetion', 'HP', 'Logitech'];

function FilterSection() {
  const dispatch = useDispatch();
  const { categoriesArray } = useSelector((store) => store.category);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
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
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
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
            {marcas.map((category) => (
              <label
                key={category}
                className="flex items-center justify-between p-2 text-sm md:hover:bg-indigo-700 md:transition md:cursor-pointer"
                htmlFor={category}
              >
                {category}
                <input
                  type="checkbox"
                  value={category}
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
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
