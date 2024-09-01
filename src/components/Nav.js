import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';
import Carrito from '../img/Carrito.png';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><a href="#especialidades">ESPECIALIDADES</a></li>
        <li><Link to="/menu-pizzas">MENU</Link></li>
      </ul>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li><a href="#promos">PROMOCIONES</a></li>
        <li><a href="#nosotros">NOSOTROS</a></li>
      </ul>
      {/* Envolvemos el ícono del carrito en un Link */}
      <Link to="/shopping-cart">
        <img src={Carrito} alt="Carrito" />
      </Link>
    </nav>
  );
}

export default Nav;