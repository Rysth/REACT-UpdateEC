import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../redux/slices/productSlice';

function ProductSection() {
  const dispatch = useDispatch();
  const { productsArray } = useSelector((store) => store.product);
  const [visibleQuantity, setVisibleQuantity] = useState(8);

  const showMoreProducts = () => {
    setVisibleQuantity(visibleQuantity + 8);
  };

  useEffect(() => {}, [visibleQuantity]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-1 gap-10">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {productsArray.slice(0, visibleQuantity).map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${product.id}`}
              className="block w-full md:hover:-translate-y-3 md:transition"
            >
              <picture className="h-[175px] lg:h-[240px] ">
                <img
                  src={product.attributes.picture.data.attributes.url}
                  alt={product.name}
                  className="object-contain w-full h-full bg-white"
                />
              </picture>
              <header className="grid py-2">
                <h3 className="text-lg font-bold truncate max-w-[20rem] uppercase">
                  {product.attributes.name}
                </h3>
                <p className="text-sm">{`$${product.attributes.price}`}</p>
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
