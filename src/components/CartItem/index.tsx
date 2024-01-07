import "./styles.css"

import { useCart } from "../../hooks/cart/useCart";
import { Product } from "../../data";
import formatCurrency from "../../utils/formatCurrency";

interface CartItemProps {
    item: Product;
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
                {item.name} {formatCurrency(item.price)}
            </div>
            <button className="cardItem__button" onClick={handleRemoveItem}>Remover Produto</button>
        </li>
    );
};

export default CartItem;