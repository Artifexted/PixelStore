import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='card mb-3'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={product.img} className='img-fluid rounded-start' alt={product.title}/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body text-center'>
                        <h5 className='card-title'>{product.title}</h5>
                        <p className='card-text'>Cantidad: {product.amount}</p>
                        <p className='card-text'>Precio: ${product.price}</p>
                        <p className='card-text'>Subtotal: ${product.amount * product.price}</p>

                        <button className='btn btn-primary' onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;