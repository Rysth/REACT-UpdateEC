import { Button } from 'flowbite-react'

function NotFound() {
  return (
    <header className="flex flex-col items-center justify-center h-screen gap-1 animate__animated animate__fadeInDown">
      <h2 className="font-bold text-7xl md:text-[8rem]">404</h2>
      <h3 className="text-base font-semibold sm:text-2xl">¡Página no Encontrada!</h3>
      <Button
        href="/"
        size="xs"
        color="blue"
        className="float-right p-2 px-4 mt-3 text-xs text-center md:hover:scale-105 md:transition md:active:scale-95"
      >
        Regresar
      </Button>
    </header>
  )
}

export default NotFound
