import PropTypes from 'prop-types'

function CategoryCard({ imageSrc, category }) {
  return (
    <article className="h-48 p-5 border border-gray-100 sm:h-72 group">
      <a href="#" className="flex flex-col justify-between h-full">
        <picture className="h-3/4">
          <img
            src={imageSrc}
            alt={category}
            className="object-contain w-full h-full transition duration-500 group-hover:scale-110"
          />
        </picture>
        <main className="grid text-center text-gray-900 place-items-centerflex-1">
          <h3 className="text-xl">{category}</h3>
        </main>
      </a>
    </article>
  )
}

CategoryCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default CategoryCard
