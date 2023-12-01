import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <HeroSection />
    </motion.div>
  );
}

export default Home;
