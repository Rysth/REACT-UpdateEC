function HeroSection() {
  return (
    <div className="py-6sm:py-8 lg:py-12">
      <div className="px-4 mx-auto text-white max-w-screen-2xl md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center gap-5 sm:text-center lg:py-12 lg:text-left xl:w-6/12 xl:py-24">
            <p className="font-semibold text-[var(--CL-primary-cyan)] md:text-lg xl:text-xl">
              Gaming
            </p>
            <h1 className="my-5 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
              Bienvenidos a UpdateEC
            </h1>
            <p className="text-sm text-gray-500 lg:w-4/5 sm:text-base md:text-lg">
              Sumérgete en la vanguardia tecnológica del gaming. Descubre
              periféricos y componentes excepcionales para una experiencia única
              e incomparable.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/"
                className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Productos
              </a>
              <a
                href="/"
                className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg lg:h-auto xl:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt=" by Fakurian Design"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
