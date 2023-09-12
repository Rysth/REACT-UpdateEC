import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import BannerSection from '../Home/sections/BannerSection';
import SearchSection from './sections/SearchSection';
import { fetchCategories, fetchProducts } from '../../redux/products/productsSlice';

function Products() {
  const { productsArray, categoriesArray } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsArray.length === 0) dispatch(fetchProducts());
    if (categoriesArray.length === 0) dispatch(fetchCategories());
  }, [dispatch, productsArray.length, categoriesArray.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <BannerSection />
      <SearchSection productsArray={productsArray} categoriesArray={categoriesArray} />
    </motion.div>
  );
}

export default Products;
