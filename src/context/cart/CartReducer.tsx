import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";
import { Product } from "../../data";

interface CartState {
  showCart: boolean;
  cartItems: CartProduct[];
}

interface CartProduct extends Product {
  numInCart: number;
}

type CartAction =
  | { type: typeof SHOW_HIDE_CART; payload: any }
  | { type: typeof ADD_TO_CART; payload: CartProduct }
  | { type: typeof REMOVE_ITEM; payload: string };

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case SHOW_HIDE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
      case ADD_TO_CART:
        const existingItemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
      
        if (existingItemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].numInCart = updatedCartItems[existingItemIndex].numInCart + 1;
      
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, numInCart: 1 }],
          };
        }      
    case REMOVE_ITEM:
      const itemToRemove = state.cartItems.find(item => item._id === action.payload);

      if (itemToRemove) {
        if (itemToRemove.numInCart === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter(item => item._id !== action.payload),
          };
        } else {
          const updatedCartItems = state.cartItems.map(item =>
            item._id === action.payload ? { ...item, numInCart: item.numInCart - 2 } : item
          );

          return {
            ...state,
            cartItems: updatedCartItems,
          };
        }
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default CartReducer;
export type { CartProduct };