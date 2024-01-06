import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import CartProvider from './context/cart/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Nav />
        <HomeScreen />
      </CartProvider>
    </div>
  );
}

export default App;
