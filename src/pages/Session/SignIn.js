import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createSession } from '../../redux/slices/sessionSlice';

function SignIn() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (userData) => {
    dispatch(createSession(userData));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* eslint-disable */}
      <section className="h-screen">
        <div className="flex flex-col sm:grid sm:grid-cols-[55%_1fr] h-full">
          <header className="pt-16 h-full bg-gradient-to-r from-[var(--CL-primary-purple)] to-[var(--CL-primary-cyan)] flex flex-col items-center justify-center text-white gap-1 max-h-40 sm:max-h-full">
            <h2 className="text-4xl font-bold md:text-6xl">¡Bienvenido!</h2>
            <p className="">e-Commerce</p>
          </header>
          <div className="flex flex-col items-center justify-center h-full text-white">
            <form
              className="flex flex-col items-center justify-center h-full gap-1 w-72 sm:rounded-l-3xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="w-full mb-5 text-3xl font-bold text-left md:text-4xl">
                Iniciar Sesión
              </h2>
              <label htmlFor="identifier" className="grid w-full gap-2 text-sm">
                <span className="font-semibold">Correo Electrónico:</span>
                <input
                  type="email"
                  {...register('identifier', { required: true })}
                  required
                  className="p-3 px-5 text-black border border-gray-200 rounded-full"
                  placeholder="username@example.com"
                />
              </label>
              <label
                htmlFor="password"
                className="grid w-full gap-2 mt-5 text-sm"
              >
                <span className="font-semibold">Contraseña:</span>
                <input
                  type="password"
                  {...register('password')}
                  required
                  className="p-3 px-5 text-black border border-gray-200 rounded-full"
                  placeholder="*********"
                />
              </label>
              <button
                type="submit"
                className="w-full p-3 mt-5 text-sm text-white rounded-full bg-purple md:hover:scale-105 md:hover:shadow-lg md:transition md:active:scale-95"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default SignIn;
