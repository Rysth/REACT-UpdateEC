import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import BannerSection from '../Home/sections/BannerSection';
import SearchSection from './sections/SearchSection';
import { fetchCategories, fetchProducts } from '../../redux/products/productsSlice';

function Products() {
  const { categoriesArray, filteredArray } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <BannerSection />
      <SearchSection filteredArray={filteredArray} categoriesArray={categoriesArray} />
    </motion.div>
  );
}

export default Products;
