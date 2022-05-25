import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Catalogue from './components/Catalogue/Catalogue';
import { CartProvider } from './store/CartContext';

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  }

  const hideCartHandler = () => {
    setIsShowCart(false);
  }

  return (
    <CartProvider>
    
      {isShowCart && <Cart onClose={hideCartHandler} />}
      
      <Header onShowCart={showCartHandler} />
      <main>
        <Catalogue />
      </main>
    
    </CartProvider>
  );
}

export default App;
