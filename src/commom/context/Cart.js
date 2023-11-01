import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();
CartContext.displayName = "Carrinho";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityProduct, setQuantityProduct] = useState(0);
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                quantityProduct,
                setQuantityProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const {cart, 
        setCart, 
        quantityProduct, 
        setQuantityProduct 
    } = useContext(CartContext);

    function changeQuantity(id, amount) {
        return cart.map(itemFromCart => {
            if (itemFromCart.id === id) itemFromCart.amount += amount;
            return itemFromCart;
        })
    };

    function addProduct(productNew) {
        const hasTheProduct = cart.some(itemFromCart => itemFromCart.id === productNew.id);
        if (!hasTheProduct) {
            productNew.amount = 1;
            return setCart(cartPrevious =>
                [...cartPrevious, productNew]
            );
        }
        setCart(changeQuantity(productNew.id, 1));
    }

    function removeProduct(id) {
        const product = cart.find(itemFromCart => itemFromCart.id === id);
        const theLast = product.amount === 1;
        if (theLast) {
            return setCart(cartPrevious => cartPrevious.filter(itemFromCart =>
                itemFromCart.id !== id));
        }
        setCart(changeQuantity(id, -1));
    }

    useEffect(() => {
        const newQuantity = cart.reduce((counter, product) =>
        counter + product.amount, 0); 
        setQuantityProduct(newQuantity);
    }, [cart, setQuantityProduct]);

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        quantityProduct,
        setQuantityProduct
    }
}