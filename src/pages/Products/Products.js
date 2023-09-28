import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
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
      className="relative"
    >
      <SearchSection
        filteredArray={filteredArray}
        categoriesArray={categoriesArray}
      />
    </motion.div>
  );
}

export default Products;
