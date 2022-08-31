import React from 'react';
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

class CartWidget extends Component {
    render() {
        return (
            <FontAwesomeIcon icon={faCartShopping} />
        )
    }
}

export default CartWidget;