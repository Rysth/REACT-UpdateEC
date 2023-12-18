import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createAccount } from '../../../redux/slices/sessionSlice'
import { Button, Label, TextInput } from 'flowbite-react'
import { HiKey, HiMail, HiUser } from 'react-icons/hi'

function FormSignUp() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createAccount(userData))

  return (
    <form
      className="flex flex-col items-center justify-center h-full gap-3 text-white w-72 sm:rounded-l-3xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full mb-5 text-3xl font-bold text-left md:text-4xl">Registrarse</h2>
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
        <Label htmlFor="username" value="Usuario" color="gray" />
        <TextInput
          id="username"
          placeholder="John Doe"
          color="gray"
          icon={HiUser}
          {...register('username', { required: true })}
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
      <Button type="submit" fullSized className="mt-3" color="blue">
        Registrarse
      </Button>
    </form>
  )
}

export default FormSignUp
