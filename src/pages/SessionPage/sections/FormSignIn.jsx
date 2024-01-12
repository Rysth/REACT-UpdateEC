import { Button, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { HiLockClosed, HiMail } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { createSession } from '../../../redux/slices/sessionSlice'

function FormSignIn() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createSession(userData))

  return (
    <form
      className="flex flex-col items-center justify-center w-full gap-3 p-4 text-gray-900 bg-white border shadow-2xl sm:p-8 sm:w-96 rounded-xl animate__animated animate__fadeIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full py-2 mb-5 text-4xl font-bold text-center md:text-4xl">Iniciar Sesión</h2>
      <fieldset className="grid w-full gap-2 text-sm">
        <Label htmlFor="identifier" value="Correo Electrónico" color="gray" />
        <TextInput
          id="identifier"
          type="email"
          icon={HiMail}
          placeholder="username@example.com"
          color="gray"
          {...register('identifier', { required: true })}
          required
        />
      </fieldset>
      <fieldset className="grid w-full gap-2 text-sm">
        <Label htmlFor="password" value="Contraseña" color="gray" />
        <TextInput
          id="password"
          type="password"
          placeholder="*********"
          color="gray"
          icon={HiLockClosed}
          {...register('password', { required: true })}
          required
        />
      </fieldset>
      <Button type="submit" fullSized className="mt-3 transition duration-300" color="blue">
        Ingresar
      </Button>
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
