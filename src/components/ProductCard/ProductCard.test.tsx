import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './index';
import { useDetailsModal } from '../../hooks/detailsModal/useDetailsModal';
import { CartProduct } from '../../context/cart/CartReducer';

const mockUseDetailsModal = useDetailsModal as jest.MockedFunction<typeof useDetailsModal>;

jest.mock('../../hooks/detailsModal/useDetailsModal');

jest.mock('../AddToCartBtn', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

const sampleProduct:CartProduct = {
  _id: '1',
  name: 'Câmera Sony Compacta',
  numInCart: 1,
  image:
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  price: 6850.0,
  rating: 4.5,
  numReviews: 12,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  reviews: [
    {
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      rating: 3,
    },
    {
      author: 'Jane Doe',
      text: 'Duis molestie lobortis diam in mollis. Vivamus erat sapien.',
      rating: 4,
    },
  ],
};

describe('ProductCard component', () => {
  it('renders product information correctly', () => {

    const changeDetailModalVisibilityMock = jest.fn();
    mockUseDetailsModal.mockReturnValue({
        isModalOpen: false, changeDetailModalVisibility: changeDetailModalVisibilityMock
    })

    render(<ProductCard product={sampleProduct} />);

    expect(screen.getByAltText(sampleProduct.name)).toHaveAttribute('src', sampleProduct.image);
    expect(screen.getByText(sampleProduct.name)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 6\.850,00/)).toBeInTheDocument();
    expect(screen.getByTestId('rating-text')).toBeInTheDocument();
  });

  it('calls changeDetailModalVisibility when clicked', () => {
      
    const changeDetailModalVisibilityMock = jest.fn();
    mockUseDetailsModal.mockReturnValue({
        isModalOpen: false, changeDetailModalVisibility: changeDetailModalVisibilityMock
    })

    render(<ProductCard product={sampleProduct} />);

    fireEvent.click(screen.getByText(sampleProduct.name));

    expect(changeDetailModalVisibilityMock).toHaveBeenCalled();
  });

});
