import { useForm } from '@formspree/react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

function ContactSection() {
  const [state, handleSubmit] = useForm('mvonqdpy')
  const formRef = useRef(null)

  useEffect(() => {
    if (state.succeeded) {
      state.succeeded = false
      toast.info('Mensaje Envíado', { theme: 'colored' })
      formRef.current.reset()
      setTimeout(() => window.location.reload(), 1500)
    }
  }, [state])

  return (
    <section className="relative ">
      <div className="max-w-screen-xl px-4 py-24 mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Contactános</h2>
        </header>
        <div className="flex flex-wrap sm:flex-nowrap">
          <div className="relative flex items-end justify-start w-full p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10 min-h-[24rem] shadow-xl">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 "
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15948.295900119461!2d-79.9035076!3d-2.1252271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d5dc2cb91dd%3A0x99e63b4d41f9b8b!2sUpdateEC!5e0!3m2!1sen!2sec!4v1701461802982!5m2!1sen!2sec"
              style={{ margin: 0 }}
            />
          </div>
          <form
            className="flex flex-col w-full px-4 py-8 mt-8 text-white border shadow-xl bg-purple rounded-xl lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <h2 className="mb-3 text-lg font-bold text-center sm:text-2xl title-font">Comparte tus Sugerencias</h2>
            <div className="relative my-4">
              <div className="block mb-1">
                <Label htmlFor="fullname" value="Nombre Completo" className="text-white" />
              </div>
              <TextInput id="fullname" type="text" placeholder="John Doe" required />
            </div>
            <div className="relative mb-4">
              <div className="block mb-1">
                <Label htmlFor="email" value="Correo Electrónico" className="text-white" />
              </div>
              <TextInput id="email" type="email" placeholder="username@example.com" required />
            </div>
            <div className="relative mb-4">
              <div className="block mb-2">
                <Label htmlFor="message" value="Sugerencias" className="text-white" />
              </div>
              <Textarea id="message" placeholder="Mensaje..." className="resize-none" required rows={4} />
            </div>

            <Button type="submit" gradientMonochrome="purple" disabled={state.submitting}>
              Envíar
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
