import { createContext, ReactNode, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

import { Product } from "../../data";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

interface CartContextProps {
  showCart: boolean;
  cartItems: Product[];
  addToCart: (item: Product) => void;
  showHideCart: () => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);


export const useCart = () => {
  const context = useContext(CartContext);
  return context || { showCart: false, cartItems: [], addToCart: () => {}, showHideCart: () => {}, removeItem: () => {} };
};


const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: CartContextProps = {
    showCart: false,
    cartItems: [],
    addToCart: (item: Product) => {},
    showHideCart: () => {},
    removeItem: (id: number) => {},
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item: Product): void => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = (): void => {
    dispatch({ type: SHOW_HIDE_CART, payload: null });
  };

  const removeItem = (id: number): void => {
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
