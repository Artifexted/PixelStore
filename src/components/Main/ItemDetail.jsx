import React from 'react';
import ItemDetailed from './ItemDetailed';

export const ItemDetail = ({ item = [] }) => {
    return (
        <div className="row card-container">
            < ItemDetailed key={item.id} item={item} />
        </div>  
    );
}

export default ItemDetail;