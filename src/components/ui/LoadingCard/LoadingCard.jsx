import { Spinner } from 'flowbite-react'

function LoadingCard() {
  return (
    <header className="grid h-screen place-items-center animate__animated animate__fadeIn animate__slow">
      <Spinner className="w-24 h-24 fill-violet-700" />
    </header>
  )
}

export default LoadingCard
