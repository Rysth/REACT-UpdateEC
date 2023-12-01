function ActionSection() {
  return (
    <section className="bg-[var(--CL-primary-purple)] text-white">
      <div className="flex flex-wrap px-4 py-16 mx-auto sm:py-24 max-w-screen-2xl">
        <h2 className="mb-2 text-xl font-semibold sm:text-3xl md:text-4xl md:w-2/5">
          Descubre periféricos y componentes de élite.
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="text-xs leading-6 sm:text-base">
            Mejora tu juego con UpdateEC. Explora nuestra selección premium de
            periféricos y componentes gamer. Impulsa tu rendimiento y sumérgete
            en una experiencia gaming de élite. ¡Descúbrelo ahora!
          </p>
          <div className="flex mt-6 md:mt-4">
            <button
              type="button"
              className="p-2 px-4 text-xs text-black bg-white border border-transparent rounded-full md:transition md:hover:scale-105 md:active:scale-95"
            >
              Ver Productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionSection;
