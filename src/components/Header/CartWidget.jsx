import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    if(totalProducts()) {
        return (
            <div>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className='cartCount'>{totalProducts()}</span>
            </div>
        );
    }

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}

export default CartWidget;