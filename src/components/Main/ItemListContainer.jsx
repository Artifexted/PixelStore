import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import aProducts from './Products';

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise (resolve => {
                setTimeout(() => {
                resolve(aProducts)
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])
 
    return (
        <div className="container-fluid">
            <h1>PixelStore | Tienda online</h1>
            <ItemList allData={data} />
        </div>
    );
}

export default ItemListContainer;