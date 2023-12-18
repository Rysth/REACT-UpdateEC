import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createSession } from '../../../redux/slices/sessionSlice'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { HiMail, HiKey } from 'react-icons/hi'

function FormSignIn() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createSession(userData))

  return (
    <form
      className="flex flex-col items-center justify-center h-full gap-3 text-gray-900 w-72 sm:rounded-l-3xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full mb-5 text-3xl font-bold text-left md:text-4xl">Iniciar Sesión</h2>
      <fieldset htmlFor="identifier" className="grid w-full gap-2 text-sm">
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
      <fieldset htmlFor="identifier" className="grid w-full gap-2 text-sm">
        <Label htmlFor="identifier" value="Contraseña" color="gray" />
        <TextInput
          id="identifier"
          type="password"
          placeholder="*********"
          color="gray"
          icon={HiKey}
          {...register('identifier', { required: true })}
          required
        />
      </fieldset>
      <Button type="submit" fullSized className="mt-3" color="blue">
        Ingresar
      </Button>
    </form>
  )
}

export default FormSignIn
