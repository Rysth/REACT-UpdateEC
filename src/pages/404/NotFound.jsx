import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <header className="flex flex-col items-center justify-center gap-1 text-white h-[41.5rem] animate__animated animate__fadeInDown">
      <h2 className="font-bold text-7xl md:text-[8rem]">404</h2>
      <h3 className="text-base font-semibold sm:text-2xl md:text-[2rem]">¡Página no Encontrada!</h3>
      <Link
        to="/"
        className="float-right p-2 px-4 mt-3 text-xs text-center rounded-full bg-purple md:hover:scale-105 md:transition md:active:scale-95"
      >
        Regresar
      </Link>
    </header>
  )
}

export default NotFound
