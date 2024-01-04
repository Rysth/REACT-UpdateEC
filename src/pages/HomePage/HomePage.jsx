import FeatureSection from './sections/FeatureSection'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import LastestSection from './sections/LastestSection'

function HomePage() {
  return (
    <section>
      <HeroSection />
      <FeatureSection />
      <CategorySection />
      <LastestSection />
    </section>
  )
}

export default HomePage
