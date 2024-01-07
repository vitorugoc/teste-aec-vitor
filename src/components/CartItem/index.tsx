import "./styles.css"

import { useCart } from "../../hooks/cart/useCart";
import formatCurrency from "../../utils/formatCurrency";
import { CartProduct } from "../../context/cart/CartReducer";

interface CartItemProps {
    item: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { removeItem } = useCart();
    
    const handleRemoveItem = () => {
        removeItem(item._id);
    }

    return (
        <li className="cartItem__item">
            <img src={item.image} alt="" />
            <div>
                {item.name} {formatCurrency(item.price)} {`${Math.ceil(item.numInCart/2)}x`}
            </div>
            <button className="cardItem__button" onClick={handleRemoveItem}>Remover</button>
        </li>
    );
};

export default CartItem;