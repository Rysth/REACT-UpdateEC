import FeatureSection from './sections/FeatureSection'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import LastestSection from './sections/LastestSection'
import DesignSection from './sections/DesignSection'
import ActionSection from './sections/ActionSection'
import { fetchLastestProducts } from '../../redux/slices/productSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLastestProducts())
  }, [dispatch])

  return (
    <section>
      <HeroSection />
      <ActionSection />
      <FeatureSection />
      <CategorySection />
      <LastestSection />
      <DesignSection />
    </section>
  )
}

export default HomePage
