import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

function ProductSection() {
  const [visibleQuantity, setVisibleQuantity] = useState(8);

  const showMoreProducts = () => {
    setVisibleQuantity(visibleQuantity + 8);
  };

  useEffect(() => {}, [visibleQuantity]);

  return (
    <div className="flex flex-col flex-1 gap-10">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {productos.slice(0, visibleQuantity).map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${product.id}`}
              className="block w-full md:hover:-translate-y-3 md:transition"
            >
              <picture>
                <img src={product.imageUrl} alt={product.name} />
              </picture>
              <header className="grid py-2">
                <h3 className="text-lg font-bold truncate max-w-[15rem]">
                  {product.name}
                </h3>
                <p className="text-sm">{`$${product.price}`}</p>
              </header>
            </Link>
          </li>
        ))}
      </ul>
      <footer className="grid place-items-center">
        <button
          type="button"
          className="float-right p-3 px-4 text-xs text-center rounded-full bg-purple md:hover:scale-105 md:transition md:active:scale-95"
          onClick={showMoreProducts}
        >
          Mostrar Más
        </button>
      </footer>
    </div>
  );
}

export default ProductSection;
