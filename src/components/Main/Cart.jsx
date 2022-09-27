import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

export const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if(cart.length === 0) {
        return (
            <div className='emptyCart centerText'>
                <h2>No hay elementos en el carrito...</h2>
                <Link to='/'>Ver catalogo</Link>
            </div>
        );
    }

    return (
        <div className='centerText'>
            <h1>Carrito de compras</h1>

            <div className="row card-container">
                {cart.map(product => <ItemCart key={product.id} product={product} />)};
            </div>

            <h3>Total: ${totalPrice()}</h3>
        </div>
    );
}

export default Cart;