import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { catID } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = catID ? query(itemsCollection, where("cat", "==", catID)) : query(itemsCollection, orderBy("order"));

        getDocs(queryItems).then((snapShot) => {
            setData(snapShot.docs.map(item => ({id: item.id, ...item.data()})));
        });
    }, [catID])
 
    return (
        <div className="container-fluid">
            <h1 className='centerText'>PixelStore | Tienda online</h1>
            <ItemList allData={data} />
        </div>
    );
}

export default ItemListContainer;