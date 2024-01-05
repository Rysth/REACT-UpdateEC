import { Spinner } from 'flowbite-react'

function LoadingCard() {
  return (
    <header className="grid h-screen place-items-center animate__animated animate__fadeIn animate__slow">
      <Spinner color="purple" className="w-24 h-24 sm:w-28 sm:h-28" />
    </header>
  )
}

export default LoadingCard
