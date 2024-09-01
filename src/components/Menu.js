import React from 'react';
import '../styles/Menu.css';
import mashut1 from '../img/mashut1.png';
import mashut2 from '../img/mashut2.png';
import mashut3 from '../img/mashut3.png';
import mashut4 from '../img/mashut4.png';
import mashut5 from '../img/mashut5.png';
import mashut6 from '../img/mashut6.png';
import mashut7 from '../img/mashut7.png';
import mashut8 from '../img/mashut8.png';
import mashut9 from '../img/mashut9.png';
import mashut10 from '../img/mashut10.png';
import mashut11 from '../img/mashut11.png';
import mashut12 from '../img/mashut12.png';


function MenuPizzas() {
  let Agregar = (nombre, precio, cantidad) => {
    if (cantidad > 0) {
      let item = {
        nombre,
        precio,
        cantidad,
        total: precio * cantidad
      };
      
      // Recupera los items actuales del carrito desde localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      // Añade el nuevo item al carrito
      carrito.push(item);

      // Guarda el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));

      console.log(`Agregado ${nombre}, Precio: S/${precio}, Cantidad: ${cantidad}`);
    } else {
      console.log('Cantidad debe ser mayor que 0');
    }
  };
  
  return (
    <div>
        <section className="section1-menu">
          <div className='tittlesection'>
          <h2>Nuestra carta</h2></div>
          <main>
            <div className="container-1">

              <div className="card">
                <figure>
                  <img src={mashut1} alt="Mashut1" />
                  <figcaption><h1>LA MEJOR JUGADA</h1></figcaption>
                  <p className="p-alinear">1 pizza familiar en Peruana o Argentina, 6 alitas BBQ/HUT y 1 Gaseosa 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/59.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad1" id="cantidad1" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('LA MEJOR JUGADA', 59.90, parseInt(document.getElementById('cantidad1').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut2} alt="Mashut2" />
                  <figcaption><h1>COMBO GOLEADOR</h1></figcaption>
                  <p className="p-alinear">¡Esta promo es un golaso! Pizza grande(Peruana o Argentina) + Gaseosa 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/35.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad2" id="cantidad2" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO GOLEADOR', 35.90, parseInt(document.getElementById('cantidad2').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut3} alt="Mashut3" />
                  <figcaption><h1>DOBLE BONIFICACIÓN</h1></figcaption>
                  <p className="p-alinear">2 Pizzas Familiares en cualquier variedad + 12 Alas BBQ o HUT</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/99.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad3" id="cantidad3" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('DOBLE BONIFICACIÓN', 99.90, parseInt(document.getElementById('cantidad3').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut4}  alt="Mashut4" />
                  <figcaption><h1>COMBO FUTBOLERO</h1></figcaption>
                  <p>¡Esta promo es un golazo! 1 Pizza Familiar (Peruana o Argentina) + Gaseosa 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/45.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad4" id="cantidad4" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO FUTBOLERO', 45.90, parseInt(document.getElementById('cantidad4').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut5}  alt="Mashut5" />
                  <figcaption><h1>COMBO PIZZA XL</h1></figcaption>
                  <p>Lo mas grande con 4 sabores. 1 Pizza XL Clasica y 1 Gaseosa 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/69.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad5" id="cantidad5" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO PIZZA XL', 69.90, parseInt(document.getElementById('cantidad5').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut6}  alt="Mashut6" />
                  <figcaption><h1>HUT COMPLETO MEDIANO</h1></figcaption>
                  <p>¡Para que no te falte nada! 2 Pizzas M, 6 palitos a la Siciliana y una bebida 1</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/39.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad6" id="cantidad6" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('HUT COMPLETO MEDIANO', 39.90, parseInt(document.getElementById('cantidad6').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut7}  alt="Mashut7" />
                  <figcaption><h1>TRIPACK GRANDE HUT CHEESE</h1></figcaption>
                  <p>3 Pizzas Grandes Hut Cheese y 10 palitos a la siciliana</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/94.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad7" id="cantidad7" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('TRIPACK GRANDE HUT CHEESE', 94.90, parseInt(document.getElementById('cantidad7').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut8}  alt="Mashut8" />
                  <figcaption><h1>COMBO DOBLE O NADA GRANDE</h1></figcaption>
                  <p>¡Doble pizza y doble gaseosa! 2 Pizzas Grandes y 2 Bebidas de 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/59.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad8" id="cantidad8" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO DOBLE O NADA GRANDE', 59.90, parseInt(document.getElementById('cantidad8').value))} />
                  </div>
                </figure>
              </div>


              <div className="card">
                <figure>
                  <img src={mashut9}  alt="Mashut9" />
                  <figcaption><h1>COMBO SEMI FULL GRANDE</h1></figcaption>
                  <p>2 Pizzas Grandes y 10 palitos a la siciliana</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/59.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad9" id="cantidad9" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO SEMI FULL GRANDE', 59.90, parseInt(document.getElementById('cantidad9').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut10}  alt="Mashut10" />
                  <figcaption><h1>BANQUETE FAMILIAR HUT CHEESE</h1></figcaption>
                  <p>1 Pizza Familiar Hut Cheese, 6 Palitos a la Siciliana y 1 Gaseosa 1L</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/55.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad10" id="cantidad10" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('BANQUETE FAMILIAR HUT CHEESE', 55.90, parseInt(document.getElementById('cantidad10').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut11}  alt="Mashut11" />
                  <figcaption><h1>TRIPACK FAMILIAR</h1></figcaption>
                  <p>¡El triple de sabor! 3 Pizzas Familiares y 10 palitos a la siciliana</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/99.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad11" id="cantidad11" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO SEMI FULL GRANDE', 99.90, parseInt(document.getElementById('cantidad11').value))} />
                  </div>
                </figure>
              </div>

              <div className="card">
                <figure>
                  <img src={mashut12}  alt="Mashut12" />
                  <figcaption><h1>TRIPACK GRANDE</h1></figcaption>
                  <p>¡Promo triplemente buena! 3 Pizzas Grande y 6 palitos a la siciliana!</p>
                  <p>Desde</p>
                  <div className="buy">
                    <h1><strong>S/79.90</strong></h1>
                    <input className="class-number" type="number" name="cantidad12" id="cantidad12" />
                    <input className="class-button" type="button" value="Agregar"
                      onClick={() => Agregar('COMBO SEMI FULL GRANDE', 79.90, parseInt(document.getElementById('cantidad12').value))} />
                  </div>
                </figure>
              </div>

            </div>
          </main>
        </section>
    </div>
  );
}

export default MenuPizzas;