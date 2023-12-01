import HeroImage from '../../../assets/PNG/hero/hero_1.png';
import CharacterImage from '../../../assets/PNG/characters/character_2.png';

function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 object-cover h-full w-full brightness-[25%] z-[1] grayscale"
        alt="hero"
        src={HeroImage}
      />
      <img
        className="absolute right-0 object-cover bottom-0 brightness-[25%] z-[1] h-3/4 animate__animated  animate__fadeInUp "
        alt="hero"
        src={CharacterImage}
      />
      <div className="relative z-50 flex flex-col items-center justify-center h-screen max-w-screen-xl px-4 py-16 mx-auto">
        <div className="w-full text-center lg:w-2/3">
          <h1 className="mb-4 text-5xl font-bold title-font sm:text-6xl md:text-8xl animate__animated animate__fadeInDown">
            Bienvenidos a UpdateEC
          </h1>
          <p className="mx-auto my-5 text-xs font-light leading-5 sm:my-10 sm:max-w-md sm:text-base animate__animated animate__fadeIn animate__delay-1s">
            Sumérgete en la vanguardia tecnológica del gaming. Descubre
            periféricos y componentes excepcionales para una experiencia única e
            incomparable.
          </p>
          <div className="flex justify-center gap-3 animate__animated animate__fadeIn animate__delay-1s">
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
