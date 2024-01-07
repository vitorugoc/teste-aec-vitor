import "./styles.css"

import { Product } from "../../data";
import { useCart } from "../../hooks/cart/useCart";


interface AddToCartBtnProps {
    product: Product;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <button className="addToCartBtn__button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
    );
};

export default AddToCartBtn;