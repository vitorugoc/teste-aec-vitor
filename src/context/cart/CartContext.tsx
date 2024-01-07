import { createContext, ReactNode, useReducer } from "react";
import CartReducer, { CartProduct } from "./CartReducer";

import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

interface CartContextProps {
  showCart: boolean;
  cartItems: CartProduct[];
  addToCart: (item: CartProduct) => void;
  showHideCart: () => void;
  removeItem: (id: string) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: CartContextProps = {
    showCart: false,
    cartItems: [],
    addToCart: (item: CartProduct) => {},
    showHideCart: () => {},
    removeItem: (id: string) => {},
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item: CartProduct): void => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = (): void => {
    dispatch({ type: SHOW_HIDE_CART, payload: null });
  };

  const removeItem = (id: string): void => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
