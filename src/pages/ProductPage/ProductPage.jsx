import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import { findProduct } from '../../redux/slices/productSlice'
import ProductPreview from './sections/ProductPreview'
import ProductSimilar from './sections/ProductSimilar'
import { createReview, fetchReviews } from '../../redux/slices/reviewSlice'
import { useForm } from 'react-hook-form'
import { HiStar } from 'react-icons/hi2'

function ProductPage() {
  const dispatch = useDispatch()
  const { foundProduct } = useSelector((store) => store.product)
  const { active, userData } = useSelector((store) => store.session)
  const { reviewsArray } = useSelector((store) => store.review)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const { productID } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Aquí manejas la lógica para enviar la reseña
    const reviewData = {
      ...data,
      product: productID,
      user: userData.id,
    }
    dispatch(createReview(reviewData))
      .then(() => {
        dispatch(fetchReviews(productID))
      })
      .catch((error) => {
        console.error('Error al crear la reseña:', error)
      })
  }

  const averageRating = useMemo(() => {
    const totalRating = reviewsArray.reduce((acc, review) => acc + review.attributes.rating, 0)
    return reviewsArray.length ? (totalRating / reviewsArray.length).toFixed(1) : 0
  }, [reviewsArray])

  useEffect(() => {
    dispatch(findProduct(productID))
    dispatch(fetchReviews(productID))
    if (active) {
      setShowReviewForm(true)
    }
  }, [dispatch, productID])

  useEffect(() => {}, [reviewsArray])

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
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 mx-auto md:px-8">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Reseñas de Clientes
          </h2>

          <div className="flex items-center justify-between py-4 mb-4 border-t border-b">
            <div className="flex flex-col gap-0.5">
              <span className="block text-xl font-bold">Calificación</span>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className={`${i < averageRating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>

              <span className="block mt-3 text-sm text-gray-500">Basado en {reviewsArray.length} reseña/s</span>
            </div>
            {active && <button className="text-white btn btn-primary">Escribir Reseña</button>}
          </div>
          {showReviewForm && (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
              <textarea
                className="w-full input input-bordered"
                {...register('body', { required: true })}
                placeholder="Write your review here"
              />
              {errors.body && <span>This field is required</span>}

              <select className="w-full select select-bordered" {...register('rating', { required: true })}>
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
              {errors.rating && <span>This field is required</span>}

              <button type="submit" className="btn btn-primary">
                Envíar
              </button>
            </form>
          )}
          <div className="divide-y">
            {reviewsArray.map((review, index) => (
              <div key={index} className="flex flex-col gap-3 py-4 md:py-8">
                <header className="flex items-center justify-between">
                  <h4 className="block text-xl">{review.attributes.user.data.attributes.username}</h4>
                  <p className="block text-sm text-gray-500">
                    {new Date(review.attributes.createdAt).toLocaleDateString()}
                  </p>
                </header>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`${i < review.attributes.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">{review.attributes.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
