import { Button, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { HiLockClosed, HiMail } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import LoginIllustration from '../../../assets/SVG/illustrations/undraw_login.svg'
import { createSession } from '../../../redux/slices/sessionSlice'

function FormSignIn() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createSession(userData))

  return (
    <form
      className="flex flex-col items-center justify-center w-full gap-3 p-4 text-gray-900 bg-white shadow-xl sm:p-8 sm:w-96 rounded-xl animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img src={LoginIllustration} alt="" className="w-40 lg:w-60" />
      <h2 className="w-full py-2 text-3xl font-bold text-center">Iniciar Sesión</h2>
      <fieldset className="grid w-full gap-2">
        <TextInput
          id="identifier"
          type="email"
          placeholder="Correo Electrónico"
          icon={HiMail}
          color="gray"
          {...register('identifier', { required: true })}
          required
        />
      </fieldset>
      <fieldset className="grid w-full gap-2">
        <TextInput
          id="password"
          type="password"
          color="gray"
          placeholder="Contraseña"
          icon={HiLockClosed}
          {...register('password', { required: true })}
          required
        />
      </fieldset>
      <fieldset className="grid w-full">
        <Button type="submit" fullSized className="transition duration-300" color="blue">
          Ingresar
        </Button>
      </fieldset>
      <fieldset className="flex items-center gap-1 text-xs">
        ¿Eres Nuevo/a?
        <a href="/sign_up" className="text-blue-600 underline transition hover:text-blue-800">
          ¡Registrate Ahora!
        </a>
      </fieldset>
    </form>
  )
}

export default FormSignIn
