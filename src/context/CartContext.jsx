import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, amount) => {
        if(isOnCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id 
                ? (product.amount + amount > product.stock) ? { ...product, amount: product.stock } : { ...product, amount: product.amount + amount } 
                : product;
            }));
        } else {
            setCart([...cart, { ...item, amount}]);
        }
    };

    console.log('carrito: ', cart);

    const clearCart = () => setCart([]);

    const isOnCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    };

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{
            clearCart,
            isOnCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;