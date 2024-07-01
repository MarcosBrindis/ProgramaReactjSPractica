import React from 'react';
import './Intro.css';
import Image from '../atoms/Image';
import img1 from '../../assets/img/home-img-1.jpg';
import img2 from '../../assets/img/home-img-2.jpg';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <h2 className="highlight">Bienvenido a Adopt & Love</h2>
        <p className="tm-text">
          Aquí, cada latido cuenta. Nos dedicamos a encontrar hogares amorosos para nuestros amigos de cuatro patas que están esperando ser adoptados. Creemos que cada perro merece una segunda oportunidad para tener una vida llena de amor, cuidado y diversión.
        </p>
        <p className="tm-text">
        ¡Gracias por visitarnos y por considerar la adopción de un perro! Juntos, podemos hacer del mundo un lugar mejor para nuestros amigos caninos. 🐶❤️ <a rel="nofollow" href="https://paot.org.mx/adoptacdmx/" target="_blank">contactanos</a> para mas información.
        </p>
      </div>
      <div className="intro-right">
        <Image src={img1} alt="Image 1" className="intro-img" />
        <Image src={img2} alt="Image 2" className="intro-img" />
      </div>
    </div>
  );
};

export default Intro;
