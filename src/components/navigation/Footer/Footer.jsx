import BrandImage from '../../../assets/SVG/brand_white.svg'

function Footer() {
  return (
    <footer class="shadow  text-white bg-[var(--CL-primary-purple)]">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex flex-col items-center mb-4 sm:mb-0 space-x-3">
            <picture>
              <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
            </picture>
          </a>
          <ul class="flex flex-wrap justify-center md:justify-end items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Tienda
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contactos
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span class="block text-sm text-gray-400 text-center">
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
