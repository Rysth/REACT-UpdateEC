import { useForm } from '@formspree/react';
import { useEffect, useRef } from 'react';
import { NotificationManager } from 'react-notifications';

function ContactSection() {
  const [state, handleSubmit] = useForm('mvonqdpy');
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      NotificationManager.success('¡Muchas Gracias!', 'Envíado', 2000);
      state.succeeded = false;
      formRef.current.reset();
    }
  }, [state]);

  return (
    <section className="relative text-white">
      <div className="px-4 py-24 mx-auto max-w-screen-2xl ">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Contactános</h2>
        </header>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div className="relative flex items-end justify-start w-full p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10 min-h-[24rem]">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15948.295900119461!2d-79.9035076!3d-2.1252271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d5dc2cb91dd%3A0x99e63b4d41f9b8b!2sUpdateEC!5e0!3m2!1sen!2sec!4v1701461802982!5m2!1sen!2sec"
              style={{ margin: 0 }}
            />
          </div>
          <form
            className="flex flex-col w-full px-4 py-8 mt-8 border border-gray-700 rounded-xl lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <h2 className="mb-1 text-lg font-bold text-center sm:text-xl title-font">
              Comparte tus Sugerencias
            </h2>
            <div className="relative my-4">
              <label htmlFor="name" className="text-sm leading-7 text-light">
                Nombre Completo
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 text-sm leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-1 focus:ring-[var(--CL-primary-cyan)]"
                />
              </label>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm leading-7 text-light">
                Correo Electrónico
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 text-sm leading-8 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-1 focus:ring-[var(--CL-primary-cyan)]"
                />
              </label>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm font-light leading-7">
                Mensaje
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 px-3 py-1 text-sm leading-6 text-black transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-[var(--CL-primary-cyan)]"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="p-2 px-4 text-xs sm:text-sm bg-[var(--CL-primary-purple)] rounded-md md:transition md:hover:scale-105 md:active:scale-95 border border-transparent"
            >
              Envíar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
