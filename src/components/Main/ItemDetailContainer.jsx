import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import aProducts from './Products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
   
    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(aProducts);
            }, 2000);
        });

        getData.then((res) => {
            const itemFound = res.find((reply) => reply.id === 1);
            setItem(itemFound);
        });
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
                <h5 className='card-title text-center'>Detalle de Productos</h5>
                <ItemDetail item={item} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;