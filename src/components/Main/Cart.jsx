import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

export const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ orderID, setOrderID ] = useState('');

    const date = new Date();
    const time = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();

    const order = {
        buyer: {
            name: name,
            phone: phone,
            email: email
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, amount: product.amount })),
        date: time,
        total: totalPrice()
    };

    const handleClick = () => {
        if(name.length < 3 || phone.length < 3 || email.length < 3 ) {
            alert("Necesitas completar todos los campos!");
            return;
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => setOrderID(id))
    }

    if(cart.length === 0) {
        return (
            <div className='centerText container-fluid'>
                <h1>No hay elementos en el carrito...</h1>
                <Link to='/'>Ver catalogo</Link>
            </div>
        );
    } else if(orderID) {
        return (
            <div className='centerText container-fluid'>
                <h1>Gracias por tu compra!</h1>

                <p>Orden de compra N°: {orderID}</p>
            </div>
        );
    } else {
        return (
            <div className='centerText container-fluid'>
                <h1>Carrito de compras</h1>

                <div className="row card-container">
                    {cart.map(product => <ItemCart key={product.id} product={product} />)}
                </div>

                <h3>Total: ${totalPrice()}</h3>

                    <div className='col-md-4 offset-md-4'>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Nombre:</label>
                            <input type='text' className='form-control' id='name' onInput={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone' className='form-label'>Teléfono:</label>
                            <input type='number' className='form-control' id='phone' onInput={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>e-mail:</label>
                            <input type='email' className='form-control' id='email' onInput={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                <button className='btn btn-primary' onClick={ handleClick }>Confirmar compra...</button>
            </div>
        );
    }
}

export default Cart;