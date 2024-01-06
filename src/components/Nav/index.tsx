import "./styles.css"
import { useCart } from "../../hooks/cart/useCart";

interface NavProps {

}

const Nav: React.FC<NavProps> = () => {
    const { cartItems } = useCart();

    return (
        <nav>
            <div className="nav__left">Loja</div>
            <div className="nav__middle">
                <div className="input__wrapper">
                    <input type="text" />
                    <i className="fas fa-search" />
                </div>
            </div>
            <div className="nav__right">
                <div className="cart__icon">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    {cartItems.length > 0 && (
                        <div className="item__count">
                            <span>{cartItems.length}</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;