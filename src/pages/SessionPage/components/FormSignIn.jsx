import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createSession } from '../../../redux/slices/sessionSlice'
import { Button, Label, TextInput } from 'flowbite-react'
import { HiMail, HiKey } from 'react-icons/hi'

function FormSignIn() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createSession(userData))

  return (
    <form
      className="flex flex-col items-center justify-center w-full gap-3 p-4 text-gray-900 bg-white border shadow-xl sm:p-8 sm:w-96 rounded-xl animate__animated animate__zoomIn "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full mb-5 text-3xl font-bold text-center md:text-4xl">Iniciar Sesión</h2>
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
          icon={HiKey}
          {...register('password', { required: true })}
          required
        />
      </fieldset>
      <Button type="submit" fullSized className="mt-3 transition duration-300" color="purple" pill>
        Ingresar
      </Button>
      <Button href="/sign_up" type="submit" className="transition duration-300" color="light" size="xs" pill>
        ¡Registrate Ahora!
      </Button>
    </form>
  )
}

export default FormSignIn
