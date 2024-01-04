import BrandImage from '../../../assets/SVG/brand.svg'

function Footer() {
  return (
    <footer className="text-white border-t border-gray-100">
      <div className="flex flex-col items-center justify-between max-w-screen-xl px-4 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start" href="/">
          <picture>
            <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
          </picture>
        </a>
        <p className="mt-4 text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
          © 2023 UpdateEC —
          <a
            href="https://github.com/Rysth"
            className="ml-1 font-semibold text-purple-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            @rysthcraft
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer