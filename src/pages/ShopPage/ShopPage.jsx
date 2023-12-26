import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { productActions } from '../../redux/slices/productSlice'
import BannerSection from './sections/BannerSection'
import FilterSection from './sections/FilterSection'
import ProductSection from './sections/ProductSection'
import SearchSection from './sections/SearchSection'

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
    <section className="relative mb-10 text-white">
      <article className="max-w-screen-xl mx-auto">
        <BannerSection />
        <main className="flex flex-col flex-wrap px-4">
          <SearchSection selectedIDs={selectedIDs} dispatch={dispatch} />
          <div className="flex flex-col gap-10 sm:flex-row">
            <FilterSection selectedIDs={selectedIDs} handleCheck={handleCheck} />
            <ProductSection />
          </div>
        </main>
      </article>
    </section>
  )
}

export default ShopPage
