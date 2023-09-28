import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AboutImage from '../../../assets/PNG/about/about.jpg';
import Button from '../../../components/Buttons/Buttons';
import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';
import Subheading from '../../../components/Subheading/Subheading';

function AboutSection() {
  return (
    <div className="container grid max-w-screen-xl px-4 py-20 mx-auto md:py-32">
      <Subheading subtitle="Acerca de Nosotros" title="Nuestro Compromiso" />
      <div className="grid items-center gap-5 py-5 lg:grid-cols-2 lg:gap-28 lg:py-20">
        <motion.div
          className="row-start-2 row-end-3 my-3 overflow-hidden lg:row-start-1 lg:row-end-2"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <LoadingAnimation initialX="-30%" animateX="100%" />
          <img
            className="object-cover my-2 rounded-xl"
            src={AboutImage}
            alt="Hero"
          />
          <LoadingAnimation initialX="100%" animateX="-30%" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.25 }}
          className="grid gap-3"
        >
          <p className="max-w-lg mx-auto my-3 text-sm leading-5 text-center lg:max-w-full lg:text-left text-slate-300 md:text-base">
            En UpdateEC, nuestra tienda en línea, contamos con un equipo
            apasionado por la tecnología. Estamos aquí para asesorarte y
            ofrecerte la mejor experiencia de compra posible. Nuestro
            conocimiento en periféricos y componentes informáticos está a tu
            disposición para ayudarte en cada paso de tu viaje tecnológico.
            ¡Confía en nosotros para satisfacer tus necesidades tecnológicas!
            <br />
            <br />
            Tu satisfacción es nuestra prioridad, y estamos emocionados de
            acompañarte en tu búsqueda de soluciones tecnológicas de vanguardia.
            ¡Bienvenido a UpdateEC, donde la tecnología se encuentra con la
            pasión!
          </p>
          <div className="flex justify-center gap-8 lg:justify-start">
            <Button
              text="Catálogo"
              variant="secondary"
              onClickFunc={() => {}}
            />
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

function LoadingAnimation({ initialX, animateX }) {
  return (
    <motion.div
      initial={{ x: initialX, color: '#8f00ff' }}
      animate={{ x: animateX, color: '#47e9ff' }}
      transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      className="flex gap-5 text-xs"
    >
      <i className="fa-solid fa-circle" />
      <i className="fa-solid fa-circle" />
      <i className="fa-solid fa-circle" />
      <i className="fa-solid fa-circle" />
      <i className="fa-solid fa-circle" />
    </motion.div>
  );
}

LoadingAnimation.propTypes = {
  initialX: PropTypes.string.isRequired,
  animateX: PropTypes.string.isRequired,
};

export default AboutSection;
