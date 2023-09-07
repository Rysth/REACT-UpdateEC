import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../../../assets/PNG/about/about.jpg';
import Button from '../../../components/Buttons/Buttons';
import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';

function AboutSection() {
  return (
    <div className="container md:container mx-auto grid p-4 py-20 md:py-32">
      <header className="text-white text-center">
        <p className="text-sm md:text-lg font-light">Acerca de Nosotros</p>
        <h2 className="text-xl md:text-4xl my-1 font-bold">Nuestro Compromiso</h2>
      </header>
      <div className="grid lg:grid-cols-2 items-center gap-5 lg:gap-28 py-5 lg:py-20">
        <motion.div
          className="overflow-hidden row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 my-3"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.div
            initial={{ x: '-30%', color: '#8f00ff' }}
            animate={{ x: '100%', color: '#47e9ff' }}
            transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
            className="flex gap-5 text-xs"
          >
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
          </motion.div>
          <img className="rounded rounded-xl object-cover " src={AboutImage} alt="Hero" />
          <motion.div
            initial={{ x: '100%', color: '#47e9ff' }}
            animate={{ x: '-30%', color: '#8f00ff' }}
            transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
            className="flex gap-5 text-xs"
          >
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
          className="grid gap-3"
        >
          <p className="text-slate-300 text-sm md:text-lg my-3 leading-5">
            En UpdateEC, nuestra tienda en línea, contamos con un equipo apasionado por la
            tecnología. Estamos aquí para asesorarte y ofrecerte la mejor experiencia de compra
            posible. Nuestro conocimiento en periféricos y componentes informáticos está a tu
            disposición para ayudarte en cada paso de tu viaje tecnológico. ¡Confía en nosotros para
            satisfacer tus necesidades tecnológicas!
            <br />
            <br />
            Tu satisfacción es nuestra prioridad, y estamos emocionados de acompañarte en tu
            búsqueda de soluciones tecnológicas de vanguardia. ¡Bienvenido a UpdateEC, donde la
            tecnología se encuentra con la pasión!
          </p>
          <div className="flex justify-center gap-8 lg:justify-start">
            <Button text="Catálogo" variant="secondary" onClickFunc={() => {}} />
            <Button
              text="Contactar"
              variant="light"
              onClickFunc={() => {
                handleNavigation(contactURL);
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
