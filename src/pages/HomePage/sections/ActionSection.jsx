import { Button } from 'flowbite-react'

function ActionSection() {
  return (
    <div className="p-4 py-8 bg-purple lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg sm:flex-row">
          <header className="text-center sm:text-left">
            <h2 className="mb-2 text-2xl font-bold sm:mb-1 text-cyan-400 md:text-4xl">Potencia tu Juego</h2>
            <p className="max-w-md text-sm text-gray-200 sm:text-base">
              Domina con estilo. Encuentra tus herramientas gamer. ¡Explora y juega mejor!
            </p>
          </header>
          <Button href="/shop" color="light" className="w-32">
            Comenzar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ActionSection
