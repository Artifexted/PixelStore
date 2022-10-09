import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    const showCount = () => {
        return totalProducts() ? <span className='cartCount'>{totalProducts()}</span> : false;
    };

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />

            { showCount() }
        </div>
    );
}

export default CartWidget;
