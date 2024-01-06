import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import { Product } from "../../data";
import Rating from "../Rating";
import { useCart } from "../../hooks/cart/useCart";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
      addToCart(product);
    };
  
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
                <button className="productCard__button" onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </div>
        </div>
    );
};

export default ProductCard;