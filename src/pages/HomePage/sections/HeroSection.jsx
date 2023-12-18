import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/PNG/hero/hero_1.png'

function HeroSection() {
  return (
    <section>
      <div className="px-4 py-12 mx-auto sm:py-0 max-w-7xl sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-2/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full mx-auto rounded-lg drop-shadow-2xl"
                    alt="hero"
                    src={HeroImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> E-COMMERCE</span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl">
              Bienvenidos a UpdateEC
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-slate-200">
              Optimiza tu experiencia gaming con nuestros componentes de vanguardia. Descubre el rendimiento superior
              para conquistar cada partida. ¡Explora ahora!
            </p>
            <div className="flex gap-2 mt-0 lg:mt-6 max-w-7xl">
              <div className="mt-3 rounded-lg sm:mt-0">
                <Button
                  size="lg"
                  className="w-32 bg-purple md:active:scale-95 md:transition md:hover:scale-105"
                  color="dark"
                  as={Link}
                >
                  Contactar
                </Button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <Button
                  size="lg"
                  className="w-32 md:active:scale-95 md:transition md:hover:scale-105"
                  outline
                  color="dark"
                  as={Link}
                >
                  Tienda
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
