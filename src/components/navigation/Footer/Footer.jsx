import BrandImage from '../../../assets/SVG/brand.svg'

function Footer() {
  return (
    <footer className="text-white border-t shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex flex-col items-center mb-4 space-x-3 sm:mb-0">
            <picture>
              <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
            </picture>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 space-x-2 text-sm font-medium text-gray-900 md:justify-end sm:mb-0">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:underline">
                Tienda
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-center text-gray-600">
          © 2023 UpdateEC —
          <a href="https://github.com/Rysth" className="ml-1 text-indigo-600" rel="noopener noreferrer" target="_blank">
            @rysthcraft.
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
