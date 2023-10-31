import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
CartContext.displayName = "Carrinho";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
};

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext);

  function addProduct(productNew) {
    const hasTheProduct = cart.some(itemFromCart => itemFromCart.id === productNew.id);
    if(!hasTheProduct) {
        productNew.amount = 1;
      return setCart(cartPrevious =>
        [...cartPrevious, productNew]
      )
    }
    setCart(cartPrevious => cartPrevious.map(itemFromCart => {
      if(itemFromCart.id === productNew.id) itemFromCart.amount += 1;
      return itemFromCart;
    }))
  }

  return {
    cart,
    setCart,
    addProduct
  }
}