import React from 'react';
//import ItemCount from './ItemCount';

const ItemDetail = ({ item = [] }) => {
    return (
        <div  className='card'>
        <div  className='d-flex justify-content-center'> 
         
          <img src={item.img} className='img-fluid p-2' width='100' alt={item.descr}/>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{item.descr}</h5>
          <p className='card-text text-center'>$ {item.price}</p>

          { /*<ItemCount stock={item.stock} initial={0} onAdd={0} />*/ }
        </div>
      </div>
    );
}

export default ItemDetail;