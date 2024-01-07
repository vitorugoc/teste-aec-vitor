import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import Rating from "../Rating";
import { Product } from "../../data";
import { useCart } from "../../hooks/cart/useCart";
import { useDetailsModal } from "../../hooks/detailsModal/useDetailsModal";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const { setIsModalOpen } = useDetailsModal();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="productCard__wrapper">
            <div style={{cursor: "pointer"}} onClick={setIsModalOpen}>
                <img className="productCard__img" src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div>
                    <h5>{formatCurrency(product.price)}</h5>
                </div>
                <div className="productCard__rating">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color="#FFA41C"
                    />
                </div>
            </div>
                <button className="productCard__button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
        </div>
    );
};

export default ProductCard;