import { useState } from 'react';

const categories = ['Computadoras', 'Teclados', 'Mouses'];
const marcas = ['Asus', 'MSI', 'Meetion', 'HP', 'Logitech'];

function FilterSection() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // If selected, remove it
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // If not selected, add it
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="sm:w-52 purple">
      <form action="" className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <fieldset>
          <legend className="w-full py-2 mb-5 text-base font-semibold text-center sm:text-lg bg-purple">
            Categorías
          </legend>
          <div className="max-h-[8rem] overflow-auto">
            {categories.map((category) => (
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
