import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import aProducts from './Products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { itemID } = useParams();
   
    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(aProducts);
            }, 2000);
        });

        getData.then(res => setItem(res.find(aProducts => aProducts.id === parseInt(itemID))));
    }, [itemID]);

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