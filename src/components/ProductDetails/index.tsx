import './styles.css';

import React from 'react';

import { Product } from '../../data';
import { useDetailsModal } from '../../hooks/detailsModal/useDetailsModal';
import AddToCartBtn from '../AddToCartBtn';
import Rating from '../Rating';
import formatCurrency from '../../utils/formatCurrency';

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
                        <div className='productDetails__header'>
                            <h2>{product.name}</h2>
                            <Rating
                                value={product.rating}
                                color='#FFA41C'
                                text={`(${product.numReviews})`}
                            />
                        </div>

                        <img className="productDetails__img" src={product.image} alt="" />

                        <div className="productDetails__paymentInfo">
                            <h2>{formatCurrency(product.price)}</h2>
                            <AddToCartBtn product={product} />
                        </div>

                        <div className='productDetails__description'>
                            <span>SOBRE</span>
                            <p>{product.description}</p>
                        </div>

                        <ul>
                            <span className='productDetails__reviewHeader'>VEJA AS AVALIAÇÕES DO PRODUTO</span>
                            {product.reviews.map((comment, index) => (
                                <div className='productDetails__reviewContainer'>
                                    <hr />
                                    <div className='productDetails__reviewWrapper'>
                                        <h5 key={index}>{comment.author}</h5>
                                        <Rating
                                            value={comment.rating}
                                            color={"#FFA41C"}
                                        />
                                    </div>

                                    <li key={index}>{comment.text}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
