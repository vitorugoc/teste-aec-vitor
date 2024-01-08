import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cart from "./index";
import { useCart } from "../../hooks/cart/useCart";
import { CartContextProps } from "../../context/cart/CartContext";

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

jest.mock("../../hooks/cart/useCart");

describe("Cart component", () => {
  it("renders cart items when showCart is true", () => {
    mockUseCart.mockReturnValue({
      showCart: true,
      cartItems: [{
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
      }],
      showHideCart: jest.fn(),
      addToCart: jest.fn(),
      removeItem: jest.fn(),
    } as CartContextProps);

    render(<Cart />);

    expect(screen.getByText("Câmera Sony Compacta")).toBeInTheDocument();
  });

  it("renders 'Carrinho Vazio' when cartItems is empty", () => {
    mockUseCart.mockReturnValue({
      showCart: true,
      cartItems: [],
      showHideCart: jest.fn(),
      addToCart: jest.fn(),
      removeItem: jest.fn(), 
    } as CartContextProps);

    render(<Cart />);

    expect(screen.getByText("Carrinho Vazio")).toBeInTheDocument();
  });

  it("hides the cart when close button is clicked", () => {
    const showHideCartMock = jest.fn();
    mockUseCart.mockReturnValue({
      showCart: true,
      cartItems: [{
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
      }],
      showHideCart: showHideCartMock,
      addToCart: jest.fn(),
      removeItem: jest.fn(),
    } as CartContextProps);

    render(<Cart />);

    const closeButton = screen.getByTestId("close-button");

    fireEvent.click(closeButton);
    
    expect(showHideCartMock).toHaveBeenCalled();
  });
});
