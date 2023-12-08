import { useSelector } from 'react-redux';

function Product() {
  const { productsArray, loading } = useSelector((store) => store.product);
  const firstProduct = productsArray[0];

  if (loading) {
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
        <picture className="bg-white h-[300px] sm:h-[400px] lg:h-[550px]">
          <img
            src={firstProduct.attributes.picture.data.attributes.url}
            alt={firstProduct.name}
            className="object-contain w-full h-full"
          />
        </picture>
        <main className="flex flex-col gap-5 md:px-10">
          <header className="grid gap-1">
            <h2 className="text-lg font-bold truncate text-uppercase sm:text-xl md:text-3xl">
              {firstProduct.attributes.name}
            </h2>
            <h3 className="text-sm sm:text-xl md:text-2xl">{`$${firstProduct.attributes.price}`}</h3>
          </header>
          <p className="overflow-auto text-xs sm:text-sm">
            {firstProduct.attributes.description}
          </p>
          <footer className="flex items-center gap-5 mt-5">
            <button
              type="button"
              className="flex-1 w-full p-3 px-4 text-xs text-center bg-purple md:hover:scale-105 md:transition md:active:scale-95"
            >
              Mostrar Más
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="p-2.5 my-3 text-sm text-black"
              min={1}
              max={firstProduct.attributes.quantity}
            />
          </footer>
        </main>
      </article>
    </section>
  );
}

export default Product;
