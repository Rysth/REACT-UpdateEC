import HeroImage from '../../../assets/PNG/hero/hero_2.jpg'

function HeroSection() {
  return (
    <section>
      <article className="max-w-screen-xl mx-auto">
        <header className="flex flex-col items-center max-w-lg gap-5 py-12 mx-auto text-center sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">Bienvenidos a UpdateEC</h2>
          <p className="text-sm text-gray-500 sm:text-base">
            Optimiza tu experiencia gaming con nuestros componentes de vanguardia. Descubre el rendimiento superior para
            conquistar cada partida. <span className="font-semibold ">¡Explora ahora!</span>
          </p>
        </header>
      </article>
    </section>
  )
}

export default HeroSection
