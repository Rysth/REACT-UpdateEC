function FeatureSection() {
  return (
    <section className="text-white">
      <div className="px-4 py-24 mx-auto max-w-screen-2xl">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Nuestras Características
          </h2>
        </header>
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20  bg-[var(--CL-primary-purple)] rounded-full sm:w-32 sm:h-32 sm:mr-10">
            <i className="text-4xl fas fa-dollar-sign sm:text-7xl" />
          </div>
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg sm:text-xl text-[var(--CL-primary-cyan)] font-bold">
              Precio Competitivo
            </h2>
            <p className="text-sm leading-relaxed">
              Ofrecemos productos de alta calidad a precios competitivos,
              garantizando el mejor valor para tu inversión.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg sm:text-xl text-[var(--CL-primary-cyan)] font-bold">
              Calidad Excepcional
            </h2>
            <p className="text-sm leading-relaxed">
              Nuestra dedicación a la excelencia se refleja en cada producto.
              Calidad superior para elevar tu experiencia gaming.
            </p>
          </div>
          <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 bg-[var(--CL-primary-purple)] rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
            <i className="text-4xl fas fa-star sm:text-7xl" />
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 bg-[var(--CL-primary-purple)] rounded-full sm:w-32 sm:h-32 sm:mr-10">
            <i className="text-4xl fas fa-shield-alt sm:text-7xl" />
          </div>
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg sm:text-xl text-[var(--CL-primary-cyan)] font-bold">
              Confianza Garantizada
            </h2>
            <p className="text-sm leading-relaxed">
              Construimos confianza mediante transparencia y compromiso. Tu
              satisfacción y confianza son nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
