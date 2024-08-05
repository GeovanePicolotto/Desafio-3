import  { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = forwardRef<HTMLDivElement, CartModalProps>(({ isOpen, onClose }, ref) => {
  const { cartItems, removeItem } = useCart();
  const navigate = useNavigate(); 

  if (!isOpen) return null;

  // Calcula o subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 w-[417px] h-[746px] bg-white shadow-lg z-50 overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif'}}
    >
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={onClose}
      >
        <img src="/src/imgs/fechar.png" alt="Fechar" />
      </div>
      <div className="p-4 h-full flex flex-col">
        <h2 className='text-2xl font-semibold'>Shopping Cart</h2>
        <div className="hidden w-4/5 border border-gray-200 md:flex mb-10 mt-7"></div>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className='flex-1 overflow-y-auto'>
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className='flex items-center w-full h-[105px] gap-3 mb-4'>
                  <div className='w-[105px] h-[108px]'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                  <div className='flex-1 ml-4'>
                    <div className='font-normal text-base'>{item.title}</div>  
                    <div>{item.quantity} x <span className='text-amareloQueimado ml-5'>R${item.price.toFixed(2)}</span></div>
                  </div>
                  <button
                    className='text-red-500 ml-4'
                    onClick={() => removeItem(item.id)}
                  >
                    <img src="/src/imgs/remover.png" alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className='mt-4 flex'>
          <span className='text-base font-normal'>Subtotal</span>
          <span className='text-base text-amareloQueimado font-semibold ml-28'>R${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="hidden w-screen border border-gray-200 md:flex mb-10 mt-7"></div>
       
        <div className='flex gap-4 mb-8'>
        <button
            className='border border-black w-[87px] h-[30px] rounded-full '
            onClick={handleCartClick}
          >
            Cart
          </button>
          <button 
              className=' border border-black w-[118px] h-[30px] rounded-full '
          >
            Checkout
          </button>
          <button
              className=' border border-black w-[135px] h-[30px] rounded-full '
          >
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
});

export default CartModal;










