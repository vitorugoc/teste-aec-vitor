import React from 'react';
import './styles.css';
import { Product } from '../../data';
import { useCart } from '../../hooks/cart/useCart';
import { useDetailsModal } from '../../hooks/detailsModal/useDetailsModal';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { addToCart } = useCart();
    const { isModalOpen, changeDetailModalVisibility } = useDetailsModal();

    const handleAddToCart = () => {
        addToCart(product);
    };


    return (
        <>
            {isModalOpen && (
                <div className="modal__Overlay" onClick={changeDetailModalVisibility}>
                    <div className="modal__Content" onClick={(e) => e.stopPropagation()}>
                        <span className="closeButton" onClick={changeDetailModalVisibility}>
                            &times;
                        </span>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                        <ul>
                            {product.reviews.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
