import React from 'react';
import Product from '../../../components/Product/Product';
import ProductOne from '../../../assets/PNG/products/product-1.png';
import ProductTwo from '../../../assets/PNG/products/product-2.png';
import ProductThree from '../../../assets/PNG/products/product-3.png';

function SearchSection() {
  return (
    <div className="">
      <div className="container md:container mx-auto p-4 py-8">
        <form action="/">
          <label htmlFor="search" className="grid gap-3">
            <span className="text-lg md:text-2xl lg:text-4xl text-center lg:text-left text-white">
              Buscar Productos:
            </span>
            <input
              placeholder="Escribir..."
              type="text"
              name="search"
              id="search"
              className="p-2 px-4 rounded-full lg:w-[40rem]"
            />
          </label>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 py-10 gap-5">
          <Product
            imageSource={ProductOne}
            title="Case Gamer MSI MG Shield M301"
            price={80}
            discount={90}
          />
          <Product
            imageSource={ProductTwo}
            title="Case ASUS TUF Gaming GT301"
            price={120}
            discount={140}
          />
          <Product
            imageSource={ProductThree}
            title="Case CORSAIR ATX 4000 RGB"
            price={110}
            discount={120}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
