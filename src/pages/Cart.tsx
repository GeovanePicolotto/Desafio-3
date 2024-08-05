import React from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Cart: React.FC = () => {
  const { cartItems, removeItem, updateItemQuantity } = useCart();

  // Calcula o subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calcula o total (sem taxas e descontos adicionais)
  const total = subtotal;

  return (
    <div className="">
      <Header />
      <Banner page='Cart' />
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex flex-col md:flex-row justify-center mt-20 px-4 md:px-0'>
          {/* Lista de Itens */}
          <div className='flex flex-col w-full md:w-[817px]'>
            
            <div className='hidden md:flex items-center h-[54px] bg-bannerColor font-medium md:mb-6'>
              <div className='flex-1 text-center md:ml-10'>Product</div>
              <div className='flex-1 text-center md:mr-8'>Price</div>
              <div className='flex-1 text-center'>Quantity</div>
              <div className='flex-1 text-center'>Subtotal</div>
            </div>
            
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className='flex flex-col md:flex-row items-start md:items-center mb-4 border-b'>
                  
                  <div className='flex-shrink-0 w-[105px] h-[108px] mb-2 md:mb-0'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                  
                  <div className='flex-1 flex flex-col md:flex-row items-start md:items-center mb-2 md:mb-0'>
                    <div className='flex-1 font-semibold md:ml-6'>{item.title}</div>
                    <div className='text-right md:text-center md:ml-4 mb-2 md:mb-0'>
                      R${item.price.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className='flex-1 flex items-center justify-center mb-2 md:mb-0'>
                    <div className='flex items-center justify-between border border-black w-[106px] rounded-lg md:ml-20'>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className=' text-black px-2 py-1 rounded-l'
                      >
                        -
                      </button>
                      <span className='px-3'>{item.quantity}</span>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className=' text-black px-2 py-1 rounded-r'
                      >
                        +
                      </button>
                    </div>
                  </div>
                 
                  <div className='flex-1 text-center mb-2 md:mb-0'>
                    R${(item.price * item.quantity).toFixed(2)}
                  </div>
                 
                  <div className='flex-shrink-0 text-center'>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className='p-2'
                    >
                      <img 
                        src='/src/imgs/lixeira.png'
                        className='w-6 h-6'
                        alt='Remove'
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          
          <div className='flex flex-col justify-center items-center w-full md:w-[393px] md:h-[390px] bg-bannerColor mt-4 md:mt-0 p-4 md:ml-6'>
            <div className='flex flex-col items-center'>
              <div className='mb-6 text-2xl md:text-4xl font-semibold'>Cart Totals</div>
              <div className='flex flex-col md:flex-row justify-between w-full mb-2 font-medium'>
                <span>Subtotal</span>
                <span className='text-gray-400'>R${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex flex-col md:flex-row justify-between w-full font-medium'>
                <span>Total:</span>
                <span className='text-amareloQueimado'>R${total.toFixed(2)}</span>
              </div>
            </div>
            <button className='w-full md:w-[222px] h-[59px] rounded-2xl border border-black mt-4 text-xl font-normal'>
              Checkout
            </button>
          </div>
        </div>
      )}
      
      <Benefits />
      <Footer />
    </div>
  );
};

export default Cart;











