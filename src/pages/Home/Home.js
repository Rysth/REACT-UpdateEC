import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import ActionSection from './sections/ActionSection';
import FeatureSection from './sections/FeatureSection';
import GallerySection from './sections/GallerySection';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <HeroSection />
      <ActionSection />
      <FeatureSection />
      <GallerySection />
    </motion.div>
  );
}

export default Home;
