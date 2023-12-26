import { Button } from 'flowbite-react'
import PropTypes from 'prop-types'

function CategoryCard({ imageSrc, category, description }) {
  return (
    <article className="relative h-[350px] max-w-[275px] p-2 mx-auto sm:max-w-full sm:h-[450px] rounded-lg flex flex-col justify-center shadow-xl w-full">
      <span className="absolute inset-0 w-full rounded-lg bg-gradient-to-t from-violet-800 to-white"></span>
      <picture className="relative z-10 w-full h-3/5">
        <img src={imageSrc} alt={category} className="object-contain w-full h-full" />
      </picture>
      <main className="relative z-10 py-5 text-center text-white">
        <h3 className="text-xl sm:text-2xl">{category}</h3>
        <p className="text-xs sm:text-sm">{description}</p>
      </main>
      <footer className="flex justify-center">
        <Button href="/shop" size="xs" color="dark">
          Ver Más
        </Button>
      </footer>
    </article>
  )
}

CategoryCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CategoryCard
