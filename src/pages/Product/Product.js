import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { findProduct } from '../../redux/slices/productSlice';

function Product() {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { foundProduct } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(findProduct(productID));
  }, [dispatch, productID]);

  if (!foundProduct) {
    return (
      <header className="grid w-full h-20 py-2 bg-purple place-items-center">
        <h3 className="w-full text-lg font-bold text-center uppercase">
          Cargando...
        </h3>
      </header>
    );
  }

  return (
    <section className="relative mt-10 text-white">
      <article className="grid gap-5 px-4 py-10 mx-auto sm:py-24 max-w-screen-2xl sm:grid-cols-2">
        <picture className="bg-white h-[300px] sm:h-[450px] lg:h-[550px]">
          <img
            src={foundProduct.attributes.picture.data.attributes.url}
            alt={foundProduct.name}
            className="object-contain w-full h-full"
          />
        </picture>
        <main className="flex flex-col gap-5 md:px-10">
          <header className="grid gap-1">
            <h2 className="text-lg font-bold uppercase truncate sm:text-xl md:text-4xl">
              {foundProduct.attributes.name}
            </h2>
            <h3 className="text-sm sm:text-xl md:text-2xl">{`$${foundProduct.attributes.price}`}</h3>
          </header>
          <p className="sm:mt-5  text-xs sm:text-sm max-h-[15rem] overflow-auto">
            {foundProduct.attributes.description}
          </p>
          <footer className="flex items-center gap-5 mt-5">
            <button
              type="button"
              className="flex items-center justify-center flex-1 w-full gap-2 p-3 px-4 text-xs sm:text-sm bg-purple md:hover:scale-105 md:transition md:active:scale-95 "
            >
              <FaShoppingCart />
              Añadir al Carrito
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="p-2.5 my-3 text-xs sm:text-sm text-black"
              defaultValue={1}
              min={1}
              max={foundProduct.attributes.quantity}
            />
          </footer>
        </main>
      </article>
    </section>
  );
}

export default Product;
