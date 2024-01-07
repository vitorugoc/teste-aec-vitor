import React from "react";

import "./styles.css";

import { useCart } from "../../hooks/cart/useCart";


import formatCurrency from "../../utils/formatCurrency";
import reduceCart from "../../utils/reduceCart";

interface CartProps {

}

const Cart: React.FC<CartProps> = () => {
    const { showCart, cartItems, showHideCart } = useCart();

    return (
        <React.Fragment>
            {showCart && (
                <div className="cart__wrapper">
                    <div style={{ textAlign: 'right' }}>
                        <i
                            style={{ cursor: 'pointer' }}
                            className="fa fa-times-circle"
                            aria-hidden='true'
                            onClick={showHideCart}
                        ></i>
                    </div>
                    <div className="cart__innerWrapper">
                        {cartItems.length === 0
                            ? (<h4>Carrinho Vazio</h4>)
                            : (
                                <ul>
                                    {/* {cartItems.map(item => (
                                        <CartItem
                                            key={item._id}
                                            item={item}
                                        />
                                    ))} */}
                                </ul>
                            )}
                    </div>
                    <div className="cart__total">
                        <div>
                            Total:
                        </div>
                        <div></div>
                        <div style={{marginLeft: 5}}>
                            {formatCurrency(reduceCart(cartItems))}
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Cart;