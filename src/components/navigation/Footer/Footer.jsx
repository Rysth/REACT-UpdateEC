import BrandImage from '../../../assets/SVG/brand_white.svg'

function Footer() {
  return (
    <footer className="text-white border-t bg-[var(--CL-primary-purple)]">
      <div className="flex flex-col items-center justify-between max-w-screen-xl px-4 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start" href="/">
          <picture>
            <img src={BrandImage} className="w-24 sm:w-28" alt="UpdateEC's logo brand" />
          </picture>
        </a>
        <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">
          © 2023 UpdateEC —
          <a href="https://github.com/Rysth" className="ml-1 text-cyan-300" rel="noopener noreferrer" target="_blank">
            @rysthcraft
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
