import React from 'react';

const ItemDetail = ({ item = [] }) => {
    return (
        <div className='card'>
        <div className='d-flex justify-content-center'>
          <img src={item.img} className='img-fluid p-2' width='100' alt={item.title}/>
        </div>
        <div className='card-body'>
          <h5 className='card-title text-center'>{item.title}</h5>
          <p className='card-text text-center'>{item.descr}</p>
          <p className='card-text text-center'>$ {item.price}</p>
        </div>
      </div>
    );
}

export default ItemDetail;