// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import LoginPage from './pages/Login'; 
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginPage />} /> {/* Adicione esta linha */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;




