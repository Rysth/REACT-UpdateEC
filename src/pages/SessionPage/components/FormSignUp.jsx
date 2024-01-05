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
      className="flex flex-col items-center justify-center w-full gap-3 p-4 text-gray-900 bg-white border shadow-xl sm:p-8 sm:w-96 rounded-xl animate__animated animate__zoomIn "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full mb-5 text-3xl font-bold text-center md:text-4xl">Registrarse</h2>
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
        <Label htmlFor="email" value="Correo Electrónico" color="gray" />
        <TextInput
          id="email"
          type="email"
          icon={HiMail}
          placeholder="username@example.com"
          color="gray"
          {...register('email', { required: true })}
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
        Registrarse
      </Button>
      <Button href="/sign_in" type="submit" className="transition duration-300" color="light" size="xs" pill>
        ¿Ya tienes una cuenta?
      </Button>
    </form>
  )
}

export default FormSignUp
