import "./styles.css"

import { Product } from "../../data";
import { useCart } from "../../hooks/cart/useCart";
import { CartProduct } from "../../context/cart/CartReducer";


interface AddToCartBtnProps {
    product: Product;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const cartProduct: CartProduct = {
            ...product,
            numInCart: 0,
        };
        addToCart(cartProduct);
    };

    return (
        <button className="addToCartBtn__button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
    );
};

export default AddToCartBtn;