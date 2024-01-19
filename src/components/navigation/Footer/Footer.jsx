import BrandImage from '../../../assets/SVG/brand_white.svg'

function Footer() {
  return (
    <footer className="text-white bg-purple animate__animated animate__fadeIn animate__slow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex flex-col items-center mb-4 sm:mb-0">
            <picture>
              <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
            </picture>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 space-x-4 text-sm font-medium md:justify-end sm:mb-0 md:space-x-8">
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
            <li>
              <a href="/about" className="hover:underline">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-center text-gray-400">
          © 2023 UpdateEC —
          <a href="https://github.com/Rysth" className="ml-1 text-cyan-300" rel="noopener noreferrer" target="_blank">
            @rysthcraft.
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
