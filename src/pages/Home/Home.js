import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import BannerSection from './sections/BannerSection';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <HeroSection />
      <AboutSection />
      <BannerSection />
    </motion.div>
  );
}

export default Home;
