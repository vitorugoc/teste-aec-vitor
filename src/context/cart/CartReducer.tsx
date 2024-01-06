import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";
import { Product } from "../../data";

interface CartState {
  showCart: boolean;
  cartItems: Product[];
}

type CartAction =
  | { type: typeof SHOW_HIDE_CART; payload: any }
  | { type: typeof ADD_TO_CART; payload: Product }
  | { type: typeof REMOVE_ITEM; payload: number };

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case SHOW_HIDE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
