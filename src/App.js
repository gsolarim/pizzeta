import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPizzas from './components/Menu';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu-pizzas" element={<MenuPizzas />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;