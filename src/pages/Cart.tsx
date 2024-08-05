import React from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  // Calcula o subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="">
        <Header/>
      <h1 className='text-2xl font-semibold mb-4'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className='flex items-center mb-4'>
                <div className='w-[105px] h-[108px]'>
                  <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                </div>
                <div className='ml-4'>
                  <div className='font-semibold'>{item.title}</div>
                  <div>{item.quantity} x R${item.price.toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className='mt-4 font-bold text-lg'>
            <span>Subtotal: </span>
            <span>R${subtotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
