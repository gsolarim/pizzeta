import React, { useState } from 'react';
import Banner from '../img/Banner.jpg';
import Romana from '../img/Romana foto.png';
import Pepperoni from '../img/Pepperoni foto.png';
import Suprema from '../img/Suprema foto.png';
import Americana from '../img/Americana foto.png';
import Napolitana from '../img/Napolitana foto.png';
import Pollobbq from '../img/Pollo bbq foto.png';
import Promo1 from '../img/Promo1.png';
import Promo2 from '../img/Promo2.png';
import Promo3 from '../img/Promo3.png';
import Pizza from '../img/Pizza.png';
import '../styles/Home.css';

function Home() {
  const [mostrarPizzas, setMostrarPizzas] = useState(false);

  // Funciones para mostrar y ocultar las pizzas
  const mostrar = () => setMostrarPizzas(true);
  const ocultar = () => setMostrarPizzas(false);

  return (
    <>
      <header className='header' id='banner'>
        <div className="banner">     
          <img src={Banner} alt="Banner" />
        </div>
      </header>

      <section className="section-1" id="especialidades">
        <h3>Directa del horno</h3>
        <h2>NUESTRA ESPECIALIDAD</h2>

        <div className="pizzas-contentido">
          <div className="pizza">
            <img src={Romana} alt="Romana" />
            <h2>ROMANA</h2>
          </div>
          <div className="pizza">
            <img src={Pepperoni} alt="Pepperoni" />
            <h2>PEPPERONI</h2>
          </div>
          <div className="pizza">
            <img src={Suprema} alt="Suprema" />
            <h2>SUPREMA</h2>
          </div>

          {/* Pizzas ocultas */}
          {mostrarPizzas && (
            <>
              <div className="pizza">
                <img src={Americana} alt="Americana" />
                <h2>AMERICANA</h2>
              </div>
              <div className="pizza">
                <img src={Napolitana} alt="Napolitana" />
                <h2>NAPOLITANA</h2>
              </div>
              <div className="pizza">
                <img src={Pollobbq} alt="Pollo BBQ" />
                <h2>POLLO BBQ</h2>
              </div>
            </>
          )}
        </div>

        {/* Botones para mostrar u ocultar */}
        {!mostrarPizzas ? (
          <button id="verMas" onClick={mostrar}>VER MÁS</button>
        ) : (
          <button id="verMenos" onClick={ocultar}>VER MENOS</button>
        )}
      </section>
      <section className="section-2" id='promos'>
        <h3>Descubre</h3>
        <h2>PROMOCIONES EXCLUSIVAS</h2>
        <div className="imagen-contenido2">
          <div className="complementos">
            <img src={Promo1} alt="Bebida" />
          </div>
          <div className="complementos">
            <img src={Promo2} alt="Helado" />
          </div>
          <div className="complementos">
            <img src={Promo3} alt="Pan" />
          </div>
        </div>

      </section>
      <section className="section-3" id="nosotros">
        <div className="nosotros-contenido">
          <h2>SOBRE <span>NOSOTROS</span></h2>
          <p>En Pizzeta, nos apasiona ofrecerte las 
              mejores pizzas hechas con amor desde 
              2024. Nuestra misión es brindar a 
              nuestros clientes una experiencia única, 
              utilizando solo ingredientes frescos y de calidad.
          </p>
          <a href="https://www.youtube.com/watch?v=ywrLSeDVH5U" target="_blank" rel="noopener noreferrer">
            <button>VER VIDEO</button>
          </a>
        </div>
        <img src={Pizza} alt="Pizza" />
      </section>
    </>
  );
}

export default Home;