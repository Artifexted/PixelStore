import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

const Main = () => {
    return (
        <main>
            <ItemListContainer />
            <ItemDetailContainer />
        </main>
    )
}

export default Main;