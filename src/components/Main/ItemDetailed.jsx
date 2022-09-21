import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetailed = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (amount) => {
    setGoToCart(true);
    addProduct(item, amount);
  };

  return (
    <div className='card'>
      <div className='d-flex justify-content-center'>
        <img src={item.img} className='img-fluid p-2' width='100' alt={item.title}/>
      </div>
      <div className='card-body text-center'>
        <h5 className='card-title'>{item.title}</h5>
        <p className='card-text'>{item.descr}</p>
        <p className='card-text'>$ {item.price}</p>

        {
          goToCart
          ? <Link to='/cart'>
              <button className='btn btn-secondary m-2'>
                Carrito de compras
              </button>
            </Link>
          : <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        }

        <Link to='/'>
          <button className='btn btn-secondary m-2'>Volver</button>
        </Link>
        
      </div>
    </div>
  );
}

export default ItemDetailed;