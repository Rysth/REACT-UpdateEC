import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import { findProduct } from '../../redux/slices/productSlice'
import { fetchReviews } from '../../redux/slices/reviewSlice'
import ProductPreview from './sections/ProductPreview'
import ProductSimilar from './sections/ProductSimilar'

function ProductPage() {
  const dispatch = useDispatch()
  const { foundProduct } = useSelector((store) => store.product)
  const { reviewsArray } = useSelector((store) => store.review)
  const { productID } = useParams()

  useEffect(() => {
    if (foundProduct) {
      dispatch(fetchReviews(foundProduct.id))
    }
  }, [dispatch, foundProduct])

  useEffect(() => {
    dispatch(findProduct(productID))
  }, [dispatch, productID])

  if (!foundProduct) {
    return <LoadingCard />
  }

  return (
    <section className="relative">
      <BreadCrumb
        paths={[
          { name: 'Tienda', href: '/shop', active: false },
          {
            name: foundProduct.attributes.name,
            href: `/shop/${foundProduct.id}`,
            active: true,
          },
        ]}
      />
      <ProductPreview />
      <ProductSimilar />
    </section>
  )
}

export default ProductPage
