import React, { useState, useEffect } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [itemAmount, setItemAmount] = useState(initial);

    const decreaseAmount = () => {
        if(itemAmount >= 0) {
            setItemAmount(itemAmount - 1);
        }
    };

    const increaseAmount = (value) => {
        if(itemAmount <= stock) {
            setItemAmount(itemAmount + 1);
        }
    };

    useEffect(() => {
        setItemAmount(initial);
    }, [initial]);

    return (
        <div className='text-center'>
            <div className='input-group'>
                <input type='button' disabled={itemAmount <= 0} className='btn btn-primary' value='-' onClick={decreaseAmount} />

                <input type='text' className='form-control' value={itemAmount} readOnly/>

                <input type='button' disabled={itemAmount >= stock} className='btn btn-primary' value='+' onClick={increaseAmount} />
            </div>

            <input type='button' disabled={(itemAmount > stock) || (itemAmount <= 0)} className='btn btn-primary m-2' value='Agregar' onClick={() => onAdd(itemAmount)} />
            
            <p>Cantidad en stock: {stock}</p>
        </div>
    );
};

export default ItemCount;