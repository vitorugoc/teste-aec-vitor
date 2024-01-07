import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  return context || { showCart: false, cartItems: [], addToCart: () => { }, showHideCart: () => { }, removeItem: () => { } };
};
