import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="tm-nav">
      <a className="navbar-brand" href="#">Adopt & Love</a>
    
      <div className="collapse navbar-collapse" id="navbar-supported-content">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item selected">
            <a className="nav-link" aria-current="page" href="#0" data-no="1">Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0" data-no="2">Galeria</a>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0" data-no="3">Acerca de</a>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0" data-no="4">Registrar</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;