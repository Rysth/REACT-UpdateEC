import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import BannerSection from '../Home/sections/BannerSection';
import SearchSection from './sections/SearchSection';
import { fetchProducts } from '../../redux/products/productsSlice';

function Products() {
  const { productsArray } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsArray.length === 0) dispatch(fetchProducts());
  }, [dispatch, productsArray.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <BannerSection />
      <SearchSection />
    </motion.div>
  );
}

export default Products;
