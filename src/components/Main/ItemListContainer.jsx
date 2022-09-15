import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import aProducts from './Products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { catID } = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(aProducts)
            }, 2000);
        });

        if(catID) {
            getData.then(res => setData(res.filter(aProducts => aProducts.cat === catID)));
        } else {
            getData.then(res => setData(res));
        }
    }, [catID])
 
    return (
        <div className="container-fluid">
            <h1>PixelStore | Tienda online</h1>
            <ItemList allData={data} />
        </div>
    );
}

export default ItemListContainer;