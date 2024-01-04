import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts, productActions } from '../../redux/slices/productSlice'
import BannerSection from './sections/BannerSection'
import FilterSection from './sections/FilterSection'
import ProductSection from './sections/ProductSection'
import SearchSection from './sections/SearchSection'
import SectionLayout from '../../layouts/SectionLayout'

function ShopPage() {
  const dispatch = useDispatch()
  const [selectedIDs, setSelectedIDs] = useState({
    category: [],
    brand: [],
  })

  useEffect(() => {
    // Dispatch initial action or any other logic when the component mounts
    dispatch(
      productActions.searchAndFilterProducts({
        searchData: '',
        categoryIDs: selectedIDs.category,
        brandIDs: selectedIDs.brand,
      }),
    )
  }, [dispatch, selectedIDs])

  const handleCheck = (id, type) => {
    // Toggle the selected ID for the given type
    const updatedSelectedIDs = {
      ...selectedIDs,
      [type]: selectedIDs[type].includes(id)
        ? selectedIDs[type].filter((selectedID) => selectedID !== id)
        : [...selectedIDs[type], id],
    }

    // Update the local state with the toggled IDs
    setSelectedIDs(updatedSelectedIDs)
  }
  return (
    <article>
      <BannerSection />
      <SectionLayout>
        <main className="flex flex-col flex-wrap max-w-screen-xl mx-auto">
          <SearchSection selectedIDs={selectedIDs} dispatch={dispatch} />
          <main className="relative flex flex-col gap-10 sm:flex-row">
            <FilterSection selectedIDs={selectedIDs} handleCheck={handleCheck} />
            <ProductSection />
          </main>
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
