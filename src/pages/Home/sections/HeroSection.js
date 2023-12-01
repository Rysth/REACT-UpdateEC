import HeroImage from '../../../assets/PNG/hero/hero.jpg';

function HeroSection() {
  return (
    <section className="relative text-white">
      <img
        className="absolute inset-0 object-cover object-center w-full h-full brightness-[30%]"
        alt="hero"
        src={HeroImage}
      />
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-5 py-20 mx-auto h-[35rem] relative z-50">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-3xl font-bold title-font sm:text-4xl md:text-8xl">
            Bienvenidos a UpdateEC
          </h1>
          <p className="max-w-md mx-auto mt-10 mb-8 text-sm font-light leading-4 sm:text-base">
            Sumérgete en la vanguardia tecnológica del gaming. Descubre
            periféricos y componentes excepcionales para una experiencia única e
            incomparable.
          </p>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="p-2 px-4 text-sm text-white border border-gray-600 rounded-full md:transition md:hover:scale-105 md:active:scale-95"
            >
              Catálogo
            </button>
            <button
              type="button"
              className="p-2 px-4 text-sm bg-[var(--CL-primary-purple)] text-white rounded-full md:transition md:hover:scale-105 md:active:scale-95 border border-transparent"
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
