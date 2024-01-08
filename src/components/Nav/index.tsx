import "./styles.css"

import { ChangeEvent } from "react";

import { useCart } from "../../hooks/cart/useCart";
import { useFilterProducts } from "../../hooks/filterProducts/useFilterProducts";

interface NavProps {

}

const Nav: React.FC<NavProps> = () => {
    const { cartItems, showHideCart } = useCart();
    const { setSearchValue, filterProducts } = useFilterProducts();

    const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    return (
        <nav>
            <div className="nav__left">Loja</div>
            <div className="nav__middle">
                <div className="input__wrapper">
                    <input type="text" onChange={handleSearchValueChange} />
                    <i
                        data-testid="search-icon"
                        className="fas fa-search"
                        style={{ cursor: 'pointer' }}
                        onClick={filterProducts}
                    />
                </div>
            </div>
            <div className="nav__right">
                <div className="cart__icon" >
                    <i
                        data-testid="cart-icon"
                        className="fa fa-shopping-cart"
                        aria-hidden="true"
                        onClick={showHideCart}
                    />
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