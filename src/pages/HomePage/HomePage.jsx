import DesignSection from './sections/DesignSection'
import FeatureSection from './sections/FeatureSection'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'

function HomePage() {
  return (
    <section>
      <HeroSection />
      <FeatureSection />
      <CategorySection />
      <DesignSection />
    </section>
  )
}

export default HomePage
