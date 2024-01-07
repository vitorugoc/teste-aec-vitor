import './styles.css';

import React from 'react';

import { Product } from '../../data';
import { useDetailsModal } from '../../hooks/detailsModal/useDetailsModal';
import AddToCartBtn from '../AddToCartBtn';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { isModalOpen, changeDetailModalVisibility } = useDetailsModal();

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
                        <AddToCartBtn product={product}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
