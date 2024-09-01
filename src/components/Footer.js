import React from 'react';
import Logo from '../img/Logo.png';
import Facebook from '../img/Facebook.png';
import Instagram from '../img/Instagram.png';
import X from '../img/X.png';
import Youtube from '../img/Youtube.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contenido-footer">
        <img className="logo-footer" src={Logo} alt="Logo" />
        <div className="footer-1">
          <h3>CONTACTO</h3>
          <ul>
            <li><a href="#">Dirección: <br /> Av. Brasil 123, Lima, Perú.</a></li>
            <li><a href="#">Teléfono: <br /> (01) 456-7890</a></li>
            <li><a href="#">Correo Electrónico: <br /> contacto@pizzeta.com</a></li>
          </ul>
        </div>
        <div className="footer-2">
          <h3>REDES SOCIALES</h3>
          <div className="img-redes">
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={X} alt="X" /></a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Youtube" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;