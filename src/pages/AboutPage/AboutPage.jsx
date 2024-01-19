import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'
import {
  HiArrowRight,
  HiArchiveBox,
  HiCheckCircle,
  HiBolt,
  HiLightBulb,
  HiHandRaised,
  HiBuildingStorefront,
} from 'react-icons/hi2'

function AboutPage() {
  return (
    <article>
      <BreadCrumb paths={[{ name: 'Nosotros', href: '/about', active: true }]} />
      <SectionLayout>
        <article className="max-w-screen-xl py-12 mx-auto">
          <header className="flex flex-col justify-between gap-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Acerca de Nosotros</h2>
            <p className="text-sm leading-6 sm:text-base">
              UpdateEC nace de una pasión profunda por el gaming, con el compromiso de ofrecer una experiencia de compra
              excepcional en el mundo del Ecommerce. Somos más que una tienda; somos una comunidad donde los entusiastas
              del gaming encuentran productos cuidadosamente seleccionados, desde hardware hasta juegos y accesorios
              exclusivos.
            </p>
          </header>
          <main className="grid gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition shadow-xl rounded-xl sm:gap-4">
              <HiLightBulb className="text-blue-600 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestra Visión</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Innovación Gaming
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Servicio Excelente
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Productos Vanguardia
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Experiencias Únicas
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Comunidad Gaming
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Compromiso Ambiental
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition shadow-xl rounded-xl sm:gap-4">
              <HiBuildingStorefront className="text-blue-600 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestra Visión</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Líderes Innovación
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Expansión Global
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Tecnología Sostenible
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Inspirar Gamers
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Alianzas Estratégicas
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Experiencia Revolucionaria
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 py-8 transition shadow-xl rounded-xl sm:gap-4">
              <HiHandRaised className="text-blue-600 text-8xl" />
              <h4 className="max-w-xs mx-auto text-sm leading-7 text-center sm:text-xl">Nuestro Compromiso</h4>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Calidad Productos
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Atención Personalizada
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Entrega Segura
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Innovación Constante
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Responsabilidad Social
                </li>
                <li className="flex items-center gap-2">
                  <HiCheckCircle className="text-xl text-blue-600" />
                  Comunidad Activa
                </li>
              </ul>
            </div>
          </main>
        </article>
      </SectionLayout>
    </article>
  )
}

export default AboutPage
