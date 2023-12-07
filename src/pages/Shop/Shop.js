import { useState } from 'react';

const categories = ['Computadoras', 'Teclados', 'Mouses'];
const marcas = ['Asus', 'MSI', 'Meetion', 'HP', 'Logitech'];
function Shop() {
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
    <section className="relative text-white">
      <article className="px-4 py-24 mx-auto max-w-screen-2xl">
        <header className="py-20 text-center bg-purple">
          <h2 className="mb-4 text-5xl font-bold title-font sm:text-6xl md:text-8xl animate__animated animate__fadeInDown">
            Tienda
          </h2>
        </header>
        <main className="flex flex-col flex-wrap">
          <div className="flex items-center justify-between sm:flex-row">
            <header className="my-8 text-center sm:my-16">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl">
                Búsqueda
              </h2>
            </header>
            <ul className="flex items-center gap-3">
              <li className="text-xs">
                <label htmlFor="order_by" className="flex items-center gap-2">
                  Ordenar:
                  <select
                    name="order_by"
                    id="order_by"
                    className="p-2 text-black"
                  >
                    <option value="1">Popularidad</option>
                  </select>
                </label>
              </li>
            </ul>
          </div>
          <div className="flex">
            <aside className="w-52 purple">
              <form action="" className="grid gap-10">
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
          </div>
        </main>
      </article>
    </section>
  );
}

export default Shop;
