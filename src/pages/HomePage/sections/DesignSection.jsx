import { HiOutlineCheckCircle } from 'react-icons/hi2'

import StockImage1 from '../../../assets/PNG/stock/stock_4.jpg'
import StockImage2 from '../../../assets/PNG/stock/stock_2.jpg'
import StockImage3 from '../../../assets/PNG/stock/stock_3.jpg'

const commitmentPoints = [
  { icon: <HiOutlineCheckCircle className="text-2xl text-cyan-400 sm:text-3xl" />, text: 'Rendimiento Impecable' },
  { icon: <HiOutlineCheckCircle className="text-2xl text-cyan-400 sm:text-3xl" />, text: 'Calidad Insuperable' },
  { icon: <HiOutlineCheckCircle className="text-2xl text-cyan-400 sm:text-3xl" />, text: 'Precios Accesibles' },
]

function DesignSection() {
  return (
    <section className="bg-purple animate__animated animate__fadeIn">
      <div className="max-w-screen-xl px-4 py-10 mx-auto lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="grid items-center grid-cols-12 gap-2 sm:gap-6 lg:-translate-x-10">
              <div className="col-span-4">
                <img className="object-cover rounded-xl" src={StockImage1} alt="Image Description" />
              </div>

              <div className="col-span-3">
                <img className="object-cover rounded-xl h-72" src={StockImage2} alt="Image Description" />
              </div>

              <div className="col-span-5">
                <img className="object-cover rounded-xl h-96" src={StockImage3} alt="Image Description" />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl text-cyan-400">Nuestro Compromiso</h2>
                <p className="text-sm text-gray-200 sm:text-base">
                  En UpdateEC, nos comprometemos a ofrecer calidad excepcional, servicio confiable y precios justos.
                  Eleva tu experiencia gamer con nosotros.
                </p>
              </div>

              <ul role="list" className="space-y-2 sm:space-y-4">
                {commitmentPoints.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {point.icon}
                    <p className="text-sm text-gray-200 sm:text-base">{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSection
