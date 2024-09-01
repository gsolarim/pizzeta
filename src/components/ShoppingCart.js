import React, { useState, useEffect } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Recupera el carrito desde localStorage
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        setCartItems(carrito);
        calculateTotal();
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [cartItems]);

    const calculateTotal = () => {
        const totalAmount = cartItems.reduce((acc, item) => acc + item.total, 0);
        setTotal(totalAmount);
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
        localStorage.setItem('carrito', JSON.stringify(newCartItems)); // Actualiza localStorage
    };

    return (
        <div className="cart-container"> {/* Añadir clase para el fondo */}
            <h1 className="carrito">CARRITO COMPRAS</h1>
            <table id="tabla-pedidos">
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tbody-pedidos">
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nombre}</td>
                            <td>${item.precio.toFixed(2)}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.total.toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleRemoveItem(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"></td>
                        <td id="total">${total.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ShoppingCart;
