import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Carousel } from '@material-tailwind/react';
import ProductImage from '../../assets/PNG/banner/banner_1.jpg';
import SearchSection from './sections/SearchSection';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/productsSlice';

function Products() {
  const { categoriesArray, filteredArray } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products and categories in parallel using Promise.all
    Promise.all([dispatch(fetchProducts()), dispatch(fetchCategories())]);
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Carousel
        className="max-w-screen-xl lg:h-[570px] mx-auto backdrop-blur-xl"
        autoplayDelay={5000}
        autoplay
        loop
      >
        <img
          src={ProductImage}
          alt=" 1"
          className="object-contain w-full h-full lg:object-fill"
        />
        <img
          src={ProductImage}
          alt=" 3"
          className="object-contain w-full h-full lg:object-fill"
        />
      </Carousel>
      <SearchSection
        filteredArray={filteredArray}
        categoriesArray={categoriesArray}
      />
    </motion.div>
  );
}

export default Products;
