import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './index';
import { useCart } from '../../hooks/cart/useCart';

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

jest.mock('../../hooks/cart/useCart');

describe('Nav component', () => {
    it('renders cart icon with item count when cart has items', () => {
        mockUseCart.mockReturnValue({
            showCart: false, cartItems: [{
                _id: "1",
                name: "Câmera Sony Compacta",
                numInCart: 1,
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                price: 6850.00,
                rating: 4.5,
                numReviews: 12,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                reviews: [
                    { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
                    { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
                ],
            }], addToCart: jest.fn(), showHideCart: jest.fn(), removeItem: jest.fn()
        });

        render(<Nav />);

        expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
      
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('renders cart icon without item count when cart is empty', () => {
        mockUseCart.mockReturnValue({ showCart: false, cartItems: [], addToCart: jest.fn(), showHideCart: jest.fn(), removeItem: jest.fn() });

        render(<Nav />);
        expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
        expect(screen.queryByText(/\d+/)).toBeNull();
    });

    it('calls showHideCart when cart icon is clicked', () => {
        const showHideCartMock = jest.fn();
        mockUseCart.mockReturnValue({ showCart: false, cartItems: [], addToCart: jest.fn(), showHideCart: showHideCartMock, removeItem: jest.fn() });

        render(<Nav />);

        const cartIcon = screen.getByTestId('cart-icon');

        fireEvent.click(cartIcon);

        expect(showHideCartMock).toHaveBeenCalled();
    });
});
