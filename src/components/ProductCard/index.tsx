import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import { Product } from "../../data";
import Rating from "../Rating";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="productCard__wrapper">
            <div>
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
                <button className="productCard__button">Adicionar ao carrinho</button>
            </div>
        </div>
    );
};

export default ProductCard;