import { Button } from 'flowbite-react'
import HeroImage from '../../../assets/PNG/hero/hero_2.jpg'

function HeroSection() {
  return (
    <section>
      <article className="flex flex-col max-w-screen-xl mx-auto">
        <header className="flex flex-col items-center max-w-lg gap-5 py-12 mx-auto text-center sm:py-20 sm:pb-10">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-8xl">Bienvenidos a UpdateEC</h2>
          <p className="text-xs text-gray-500 sm:text-base">
            Optimiza tu experiencia gaming con nuestros componentes de vanguardia. Descubre el rendimiento superior para
            conquistar cada partida. <span className="font-semibold ">¡Explora ahora!</span>
          </p>
          <div className="flex items-center gap-2">
            <Button href="/shop" className="w-32" color="purple">
              Tienda
            </Button>
            <Button href="/shop" className="w-32" color="light">
              Contactar
            </Button>
          </div>
        </header>
        <hr className="h-1 w-[45px] bg-black mx-auto" />
        <main className="py-12 sm:py-20 sm:pt-10">
          <picture className="h-[600px]">
            <img
              src={HeroImage}
              alt=""
              className=" object-coverh-full max-w-[900px] mx-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </picture>
        </main>
      </article>
    </section>
  )
}

export default HeroSection
