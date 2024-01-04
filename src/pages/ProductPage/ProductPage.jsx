import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews } from '../../redux/slices/reviewSlice'
import ProductPreview from './components/ProductPreview'
import ProductSimilar from './components/ProductSimilar'
import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

function Product() {
  const dispatch = useDispatch()
  const { foundProduct } = useSelector((store) => store.product)
  const { reviewsArray } = useSelector((store) => store.review)

  useEffect(() => {
    if (foundProduct) {
      dispatch(fetchReviews(foundProduct.id))
    }
  }, [dispatch, foundProduct])

  return (
    <section className="relative">
      <ProductPreview />
      <ProductSimilar />
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 mx-auto md:px-8">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Customer Reviews
          </h2>
          <div className="divide-y">
            {reviewsArray.map((review) => (
              <div key={review.id} className="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span className="block text-sm font-bold">{review.attributes.user.data.attributes.username}</span>
                  <span className="block text-sm text-gray-500">{review.attributes.date}</span>
                </div>
                <div className="-ml-1 flex gap-0.5">
                  {Array.from({ length: review.attributes.rating }, (_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">{review.attributes.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
