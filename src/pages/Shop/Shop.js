import { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerSection from './sections/BannerSection';
import SearchSection from './sections/SearchSection';

const categories = ['Computadoras', 'Teclados', 'Mouses'];
const marcas = ['Asus', 'MSI', 'Meetion', 'HP', 'Logitech'];
const productos = [
  {
    id: 1,
    name: 'Product 1',
    price: 499.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 199.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 799.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  // Additional products
  {
    id: 4,
    name: 'Product 4',
    price: 299.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 599.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 129.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 899.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 449.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 679.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 159.99,
    imageUrl: 'https://placehold.co/400x400',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus maiores...',
  },
];

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
        <BannerSection />
        <main className="flex flex-col flex-wrap">
          <SearchSection />
          <div className="flex gap-10">
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
            <ul className="grid flex-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productos.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="block w-full">
                    <picture>
                      <img src={product.imageUrl} alt={product.name} />
                    </picture>
                    <header className="grid py-2">
                      <h3 className="text-lg font-bold truncate max-w-[15rem]">
                        {product.name}
                      </h3>
                      <p className="text-sm">{product.price}</p>
                    </header>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </article>
    </section>
  );
}

export default Shop;
