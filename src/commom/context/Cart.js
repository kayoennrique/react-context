import { createContext, useContext, useEffect, useState } from 'react';
import { usePaymentContext } from './Payment';
import { UserContext } from './User';

export const CartContext = createContext();
CartContext.displayName = "Carrinho";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityProduct, setQuantityProduct] = useState(0);
    const [valueTotalCart, setValueTotalCart] = useState(0);
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                quantityProduct,
                setQuantityProduct,
                valueTotalCart,
                setValueTotalCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const { cart,
        setCart,
        quantityProduct,
        setQuantityProduct,
        valueTotalCart,
        setValueTotalCart
    } = useContext(CartContext);
    const {
      formPayment  
    } = usePaymentContext();
    const {
        setBalance
    } = useContext(UserContext);

    function changeQuantity(id, amount) {
        return cart.map(itemFromCart => {
            if (itemFromCart.id === id) itemFromCart.amount += amount;
            return itemFromCart;
        });
    }

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

    function makePurchase () {
        setCart([]);
        setBalance(currentBalance => currentBalance - valueTotalCart);
    }

    useEffect(() => {
        const { newTotal, newQuantity } = cart.reduce((counter,
            product) => ({
                newQuantity: counter.newQuantity + product.amount,
                newTotal: counter.newTotal + (product.worth * product.amount)
            }), {
            newQuantity: 0,
            newTotal: 0
        });
        setQuantityProduct(newQuantity);
        setValueTotalCart(newTotal * formPayment.fees);
    }, [cart, setQuantityProduct, setValueTotalCart, formPayment]);

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        quantityProduct,
        setQuantityProduct,
        valueTotalCart,
        makePurchase
    }
}