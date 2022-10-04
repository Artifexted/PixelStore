import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const { itemID } = useParams();
    const [item, setItem] = useState({});
   
    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "items", itemID);

        getDoc(response).then((snapShot) => {
            setItem({id: itemID, ...snapShot.data()});
        });
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