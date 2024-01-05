import "./styles.css"

import formatCurrency from "../../utils/formatCurrency";
import { Product } from "../../data";

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
                <button className="productCard__button">Adicionar ao carrinho</button>
            </div>
        </div>
    );
};

export default ProductCard;