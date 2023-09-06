import React from 'react';
import { ButtonSecondary } from '../../components/Buttons/Buttons';

function Home() {
  return (
    <div className="home">
      <div className="container md:container mx-auto grid p-4 py-20 md:py-28">
        <div className="text-white mx-auto">
          <h1 className="text-center text-4xl md:text-5xl lg:w-3/4 mx-auto lg:text-8xl font-bold">
            ¡Bienvenidos a UpdateEC!
          </h1>
          <p className="text-center text-gray-400 my-5 md:my-6 md:mt-8 mx-auto text-sm md:text-base md:w-full lg:w-2/4">
            El mejor lugar para comprar tús periféricos y componentes para tú PC.
          </p>
          <div className="text-center w-full">
            <ButtonSecondary text="Contactar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
