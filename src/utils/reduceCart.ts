import { Product } from "../data"

const reduceCart = (cartItems: Product[]): number => {
    const cartAmount = cartItems.reduce((amount, item) => item.price + amount, 0);
    return cartAmount;
};

export default reduceCart;