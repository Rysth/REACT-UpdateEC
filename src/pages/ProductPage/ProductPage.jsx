import { Label, Modal, Select, Textarea } from 'flowbite-react'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiStar } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import { findProduct } from '../../redux/slices/productSlice'
import { createReview, fetchReviews } from '../../redux/slices/reviewSlice'
import ProductPreview from './sections/ProductPreview'
import ProductSimilar from './sections/ProductSimilar'

function ProductPage() {
  const dispatch = useDispatch()
  const { foundProduct, active, userData, reviewsArray } = useSelector((store) => ({
    foundProduct: store.product.foundProduct,
    active: store.session.active,
    userData: store.session.userData,
    reviewsArray: store.review.reviewsArray,
  }))
  const { productID } = useParams()
  const [openModal, setOpenModal] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const reviewData = { ...data, product: productID, user: userData.id }
    dispatch(createReview(reviewData))
      .then(() => dispatch(fetchReviews(productID)))
      .catch((error) => console.error('Error al crear la reseña:', error))
      .finally(() => onCloseModal())
  }

  const averageRating = useMemo(() => {
    const totalRating = reviewsArray.reduce((acc, review) => acc + review.attributes.rating, 0)
    return reviewsArray.length ? (totalRating / reviewsArray.length).toFixed(1) : 0
  }, [reviewsArray])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <HiStar key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ))
  }

  const onCloseModal = () => {
    setOpenModal(false)
    reset()
  }

  useEffect(() => {
    dispatch(findProduct(productID))
    dispatch(fetchReviews(productID))
  }, [dispatch, productID])

  useEffect(() => {}, [reviewsArray])

  if (!foundProduct) return <LoadingCard />

  return (
    <section className="relative animate__animated animate__fadeIn animate__slow">
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
      <section className="py-6 bg-white sm:py-8 lg:py-12">
        <Modal show={openModal} size="md" onClose={onCloseModal}>
          <Modal.Header className="p-4">
            <span className="text-xl font-semibold md:text-2xl">Comparte tu Opinión</span>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="body" value="Escribe tu reseña" />
                {errors.body && <span className="text-xs text-white badge badge-error">Campo Requerido</span>}
              </div>
              <Textarea className="resize-none" rows={3} {...register('body', { required: true })} />

              <Label htmlFor="rating" value="Puntuación" className="mt-5" />
              <Select className="w-full" {...register('rating', { required: true })}>
                <option value={1}>1 - Malo</option>
                <option value={2}>2 - Regular</option>
                <option value={3}>3 - Bueno</option>
                <option value={4}>4 - Muy Bueno</option>
                <option value={5}>5 - Excelente</option>
              </Select>
              {errors.rating && <span className="badge badge-error">This field is required</span>}
              <button type="submit" className="mt-5 btn btn-primary">
                Envíar
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Reseñas de Clientes
          </h2>

          <div className="flex items-center justify-between py-4 mb-4 border-t border-b">
            <div className="flex flex-col gap-0.5">
              <span className="block text-xl font-bold">Calificación</span>

              <div className="flex gap-0.5">{renderStars(averageRating)}</div>

              <span className="block mt-3 text-sm text-gray-500">Basado en {reviewsArray.length} reseña/s</span>
            </div>
            {active && (
              <button className="text-white btn btn-primary" onClick={() => setOpenModal(true)} disabled={!active}>
                Escribir Reseña
              </button>
            )}
          </div>
          <div className="overflow-auto divide-y max-h-96">
            {reviewsArray.map((review, index) => (
              <div key={index} className="flex flex-col gap-2 py-4 md:py-8">
                <header className="flex items-center justify-between">
                  <h4 className="block text-xl">{review.attributes.user.data.attributes.username}</h4>
                  <p className="block text-sm text-gray-500">
                    {new Date(review.attributes.createdAt).toLocaleDateString()}
                  </p>
                </header>
                <div className="flex items-center gap-0.5">{renderStars(review.attributes.rating)}</div>
                <p className="text-sm text-gray-500">{review.attributes.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductPage
