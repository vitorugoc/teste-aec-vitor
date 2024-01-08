import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import CartProvider from './context/cart/CartContext';
import Cart from './components/Cart';
import FilterProductsProvider from './context/filterPosts/FilterProductsContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <FilterProductsProvider>
          <Nav />
          <HomeScreen />
        </FilterProductsProvider>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
