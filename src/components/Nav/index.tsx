import "./styles.css"

interface NavProps {

}

const Nav: React.FC<NavProps> = () => {
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
                </div>
            </div>
        </nav>
    );
};

export default Nav;