import { useForm } from '@formspree/react'
import { TextInput, Textarea } from '@tremor/react'
import { useEffect } from 'react'
import { HiMail } from 'react-icons/hi'
import { HiBuildingStorefront, HiCheckCircle, HiHandRaised, HiLightBulb, HiMapPin, HiPhone } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'

function AboutPage() {
  const [state, handleSubmit] = useForm('mvonqdpy')

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Mensaje Envíado')
      setTimeout(() => location.reload(), 2000)
    }
  }, [state])

  return (
    <article>
      <BreadCrumb paths={[{ name: 'Nosotros', href: '/about', active: true }]} />
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl py-12 mx-auto">
          <header className="flex flex-col justify-between gap-2 mb-6 space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Acerca de Nosotros</h2>
            <p className="text-sm leading-6 sm:text-base">
              UpdateEC nace de una pasión profunda por el gaming, con el compromiso de ofrecer una experiencia de compra
              excepcional en el mundo del e-Commerce. Somos una comunidad donde los entusiastas del gaming encuentran
              productos cuidadosamente seleccionados, desde hardware y accesorios exclusivos.
            </p>
          </header>
          <main className="grid gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition md:hover:shadow-xl rounded-xl sm:gap-4">
              <HiLightBulb className="text-violet-700 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestra Visión</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Innovación Gaming
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Servicio Excelente
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Productos Vanguardia
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Experiencias Únicas
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Comunidad Gaming
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition md:hover:shadow-xl rounded-xl sm:gap-4">
              <HiBuildingStorefront className="text-violet-700 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestra Misión</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Líderes Innovación
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Tecnología Sostenible
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Inspirar Gamers
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Alianzas Estratégicas
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Experiencia Revolucionaria
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition md:hover:shadow-xl rounded-xl sm:gap-4">
              <HiHandRaised className="text-violet-700 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestro Compromiso</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Calidad Productos
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Atención Personalizada
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Entrega Segura
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Innovación Constante
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl" />
                  Comunidad Activa
                </li>
              </ul>
            </div>
          </main>
        </article>
      </SectionLayout>
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow bg-gray-100">
        <article className="max-w-screen-xl py-12 mx-auto sm:py-20">
          <main className="flex flex-col gap-10 sm:gap-20 lg:flex-row">
            <form onSubmit={handleSubmit} className="p-4 py-12 bg-white rounded-md shadow-xl lg:w-2/4">
              <fieldset className="mb-5 text-center">
                <h4 className="text-3xl sm:text-5xl">Contactános</h4>
              </fieldset>
              <fieldset className="grid gap-4 sm:grid-cols-2">
                <TextInput
                  id="full_name"
                  name="full_name"
                  type="text"
                  color="gray"
                  required
                  placeholder="Nombre Completo *"
                />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  color="gray"
                  required
                  placeholder="Correo Electrónico *"
                />
              </fieldset>
              <fieldset className="grid">
                <TextInput id="subject" name="subject" type="text" color="gray" required placeholder="Tema *" />
              </fieldset>
              <fieldset className="grid">
                <Textarea
                  id="message"
                  name="message"
                  color="gray"
                  required
                  placeholder="Mensaje *"
                  rows={7}
                  className="resize-none"
                />
              </fieldset>
              <fieldset className="flex justify-end mt-5">
                <button className="text-white rounded-full btn btn-primary" type="submit" disabled={state.submitting}>
                  Envíar Mensaje
                </button>
              </fieldset>
            </form>
            <ul className="flex flex-col items-center justify-center gap-10 lg:items-start lg:w-2/4">
              <li className="flex items-center gap-2 sm:gap-4">
                <HiPhone className="text-5xl text-violet-700" />
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-sm text-gray-600">Canal de Ventas Principal</p>
                  <a
                    href="tel:+5930984798317"
                    target="_blank"
                    className="block text-xl font-semibold transition hover:text-violet-700 sm:text-3xl"
                    rel="noreferrer"
                  >
                    0984798317
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-4">
                <HiMail className="text-5xl text-violet-700" />
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-sm text-gray-600">Contacto Directo por Email</p>
                  <a
                    href="mailto:ventas@updateec.com"
                    target="_blank"
                    className="block text-xl font-semibold transition hover:text-violet-700 sm:text-3xl"
                    rel="noreferrer"
                  >
                    ventas@updateec.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-4">
                <HiMapPin className="text-5xl text-violet-700" />
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-sm text-gray-600">Consulta Nuestra Localidad</p>
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/UvtUpYb4yTQa2QeZ6"
                    className="block text-xl font-semibold transition hover:text-violet-700 sm:text-3xl"
                    rel="noreferrer"
                  >
                    Alborada, Guayaquil 090112
                  </a>
                </div>
              </li>
            </ul>
          </main>
        </article>
      </SectionLayout>
    </article>
  )
}

export default AboutPage
