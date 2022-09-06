import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [itemAmount, setItemAmount] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemInCart, setItemInCart] = useState(onAdd);

    const decreaseAmount = (value) => {
        if(value >= 0) {
            setItemAmount(value);
        }
    };

    const increaseAmount = (value) => {
        if(value <= itemStock) {
            setItemAmount(value);
        }
    };

    const addProducts = () => {
        if(itemAmount <= itemStock) {
            setItemInCart(itemAmount);
            setItemStock(itemStock - itemAmount);
        }
    };

    return (
        <div>
            <div className='input-group'>
                <input type='button' disabled={itemAmount <= 0} className='btn btn-secondary' value='-' onClick={() => {
                    decreaseAmount(itemAmount - 1);
                }} />

                <input type='text' className='form-control' value={itemAmount} readOnly />

                <input type='button' disabled={itemAmount >= itemStock} className='btn btn-secondary' value='+' onClick={() => {
                    increaseAmount(itemAmount + 1);
                }} />
            </div>

            <input type='button' disabled={(itemAmount > itemStock) || (itemAmount <= 0)} className='btn btn-secondary' value='Agregar' onClick={() => {
                    addProducts();
            }} />
            
            <p>Productos comprados: {itemInCart}</p>
            <p>Cantidad en stock: {itemStock}</p>
        </div>

    );
};

export default ItemCount;