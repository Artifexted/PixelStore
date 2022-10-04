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

    const clearCart = () => setCart([]);

    const isOnCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.amount * act.price, 0)
    };

    const totalProducts = () => {
        return cart.reduce((accumulator, targetProduct) => accumulator + targetProduct.amount, 0);
    };

    return (
        <CartContext.Provider value={{
            clearCart,
            isOnCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;