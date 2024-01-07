import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import CartProvider from './context/cart/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Nav />
        <Cart />
        <HomeScreen />
      </CartProvider>
    </div>
  );
}

export default App;
