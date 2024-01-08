import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './index';
import { useCart } from '../../hooks/cart/useCart';
import { CartContextProps } from '../../context/cart/CartContext';

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

jest.mock('../../hooks/cart/useCart');

describe('CartItem component', () => {
  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    mockUseCart.mockReturnValue({ removeItem: mockRemoveItem } as unknown as CartContextProps);
  });

  it('renders CartItem correctly', () => {
    const item = {
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
    };

    render(<CartItem item={item} />);

    expect(screen.getByAltText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 6\.850,00/)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${Math.ceil(item.numInCart / 2)}x`))).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /remover/i })).toBeInTheDocument();
  });

  it('calls removeItem function when Remove button is clicked', () => {
    const item = {
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
    };

    render(<CartItem item={item} />);

    const removeButton = screen.getByRole('button', { name: /remover/i });
    fireEvent.click(removeButton);

    expect(mockRemoveItem).toHaveBeenCalledWith(item._id);
  });
});