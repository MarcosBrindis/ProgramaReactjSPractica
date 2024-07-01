import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import Button from '../atoms/Button';
import './ButtonWithHover.css';
import dog from '../../assets/img/dog.jpg';
import dogHappy from '../../assets/img/dogHappy.jpg';

const ButtonWithHover = () => {
  const [bgImage, setBgImage] = useState(dog);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleMouseOver = () => setBgImage(dogHappy);
  const handleMouseOut = () => setBgImage(dog);
  const handleClick = () => {
    console.log('Button clicked!');
    navigate('/main'); // Navega a /main al hacer clic en el botón
  };

  return (
    <div className="button-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <Button 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Adopt & Love
      </Button>
    </div>
  );
};

export default ButtonWithHover;

