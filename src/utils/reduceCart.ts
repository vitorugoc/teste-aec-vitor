import { CartProduct } from "../context/cart/CartReducer";

const reduceCart = (cartItems: CartProduct[]): number => {
    const cartAmount = cartItems.reduce((amount, item) => item.price * Math.ceil(item.numInCart/2) + amount, 0);
    return cartAmount;
};

export default reduceCart;