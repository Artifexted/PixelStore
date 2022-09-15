import React from 'react';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';

export const Item = ({ data }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <NavLink className='nav-link' to={'/item/' + data.id}>
                        <img src={data.img} className="img-fluid rounded-start" alt={data.title}/>
                    </NavLink>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-center">
                        <h5 className="card-title">{data.title}</h5>

                        <p className="card-text">$ {data.price}</p>

                        <ItemCount stock={data.stock} initial={0} onAdd={0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;