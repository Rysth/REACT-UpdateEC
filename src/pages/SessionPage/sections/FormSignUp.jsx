import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createAccount } from '../../../redux/slices/sessionSlice'
import { Button, Label, TextInput } from 'flowbite-react'
import { HiLockClosed, HiMail, HiUser } from 'react-icons/hi'
import LoginIllustration from '../../../assets/SVG/illustrations/undraw_login.svg'

function FormSignUp() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (userData) => dispatch(createAccount(userData))

  return (
    <form
      className="flex flex-col items-center justify-center w-full gap-3 p-4 text-gray-900 bg-white shadow-xl sm:p-8 sm:w-96 rounded-xl animate__animated animate__fadeIn "
      onSubmit={handleSubmit(onSubmit)}
    >
      <img src={LoginIllustration} alt="" className="w-40 lg:w-60" />
      <h2 className="w-full py-2 text-3xl font-bold text-center">Registrarse</h2>
      <fieldset className="grid w-full gap-2">
        <Label htmlFor="username" value="Usuario" />
        <TextInput id="username" icon={HiUser} color="gray" {...register('username', { required: true })} required />
      </fieldset>
      <fieldset className="grid w-full gap-2">
        <Label htmlFor="email" value="Correo Electrónico" />
        <TextInput
          id="email"
          type="email"
          icon={HiMail}
          color="gray"
          {...register('email', { required: true })}
          required
        />
      </fieldset>
      <fieldset className="grid w-full gap-2">
        <Label htmlFor="password" value="Contraseña" />
        <TextInput
          id="password"
          type="password"
          color="gray"
          icon={HiLockClosed}
          {...register('password', { required: true })}
          required
        />
      </fieldset>
      <fieldset className="grid w-full">
        <Button type="submit" fullSized className="transition duration-300" color="dark">
          Registrarse
        </Button>
      </fieldset>
      <fieldset className="flex items-center gap-1 text-xs">
        ¿Ya tienes una cuenta?
        <a href="/sign_in" className="text-blue-600 underline transition hover:text-blue-800">
          ¡Ingresa Ahora!
        </a>
      </fieldset>
    </form>
  )
}

export default FormSignUp
