import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import Rating from "../Rating";
import { Product } from "../../data";
import { useDetailsModal } from "../../hooks/detailsModal/useDetailsModal";
import AddToCartBtn from "../AddToCartBtn";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { changeDetailModalVisibility } = useDetailsModal();

    return (
        <div className="productCard__wrapper">
            <div style={{ cursor: "pointer" }} onClick={changeDetailModalVisibility}>
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
            <AddToCartBtn product={product} />
        </div>
    );
};

export default ProductCard;