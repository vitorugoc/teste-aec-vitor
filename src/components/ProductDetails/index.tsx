import './styles.css';

import React from 'react';

import { Product } from '../../data';
import { useDetailsModal } from '../../hooks/detailsModal/useDetailsModal';
import AddToCartBtn from '../AddToCartBtn';
import Rating from '../Rating';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { isModalOpen, changeDetailModalVisibility } = useDetailsModal();

    return (
        <>
            {isModalOpen && (
                <div className="productDetails__overlay" onClick={changeDetailModalVisibility}>
                    <div className="productDetails__content" onClick={(e) => e.stopPropagation()}>
                        <span className="productDetails__closeButton" onClick={changeDetailModalVisibility}>
                            &times;
                        </span>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>

                        <ul>
                            {product.reviews.map((comment, index) => (
                                <div className='productDetails__reviewWrapper'>
                                    <h5 key={index}>{comment.author}</h5>
                                    <li key={index}>{comment.text}</li>
                                    <Rating 
                                        value={product.rating}
                                        color={"#FFA41C"}
                                    />
                                </div>
                            ))}
                        </ul>
                        <AddToCartBtn product={product} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
