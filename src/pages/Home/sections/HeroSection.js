import HeroImage from '../../../assets/PNG/hero/hero.jpg';

function HeroSection() {
  return (
    <section className="relative text-white">
      <img
        className="absolute inset-0 object-cover object-center w-full h-full brightness-[25%]"
        alt="hero"
        src={HeroImage}
      />
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-5 py-16 mx-auto h-96 sm:h-[35rem] md:h-[42rem] relative z-50">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-4xl font-bold title-font sm:text-6xl md:text-8xl">
            Bienvenidos a UpdateEC
          </h1>
          <p className="mx-auto my-5 text-xs font-light leading-5 sm:my-10 sm:max-w-md sm:text-base">
            Sumérgete en la vanguardia tecnológica del gaming. Descubre
            periféricos y componentes excepcionales para una experiencia única e
            incomparable.
          </p>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="p-2 px-4 text-xs text-white border border-gray-600 rounded-full sm:text-sm md:transition md:hover:scale-105 md:active:scale-95"
            >
              Catálogo
            </button>
            <button
              type="button"
              className="p-2 px-4 text-xs sm:text-sm bg-[var(--CL-primary-cyan)] text-black rounded-full md:transition md:hover:scale-105 md:active:scale-95 border border-transparent"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
