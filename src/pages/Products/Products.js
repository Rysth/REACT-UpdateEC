import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import SearchSection from './sections/SearchSection';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/productsSlice';

function Products() {
  const { categoriesArray, filteredArray } = useSelector(
    (store) => store.products,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="container px-4 py-0 pb-4 mx-auto md:container"
    >
      <BannerCarousel />
      <SearchSection
        filteredArray={filteredArray}
        categoriesArray={categoriesArray}
      />
    </motion.div>
  );
}

export default Products;
