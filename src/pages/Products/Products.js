import React from 'react';
import { motion } from 'framer-motion';
import BannerSection from '../Home/sections/BannerSection';
import SearchSection from './sections/SearchSection';

function Products() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <BannerSection />
      <SearchSection />
    </motion.div>
  );
}

export default Products;
