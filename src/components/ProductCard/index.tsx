import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import Rating from "../Rating";
import { Product } from "../../data";
import { useCart } from "../../hooks/cart/useCart";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="productCard__wrapper">
            <div>
                <img className="productCard__img" src={product.image} alt="" onClick={openModal} />
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
                <button className="productCard__button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </div>
            {isModalOpen && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <span className="closeButton" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                        <ul>
                            {product.reviews.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;