import FeatureSection from './sections/FeatureSection'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import LastestSection from './sections/LastestSection'
import DesignSection from './sections/DesignSection'
import ActionSection from './sections/ActionSection'

function HomePage() {
  return (
    <section>
      <HeroSection />
      <ActionSection />
      <FeatureSection />
      <CategorySection />
      <DesignSection />
      <LastestSection />
    </section>
  )
}

export default HomePage
