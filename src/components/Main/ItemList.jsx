import React from 'react';
import Item from './Item';

export const ItemList = ({ allData = [] }) => {
    return (
        <div className="row card-container">
            { allData.map(result => <Item key={result.id} data={result} />) }
        </div>
    );
}

export default ItemList;