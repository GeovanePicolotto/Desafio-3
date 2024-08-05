import  { forwardRef } from 'react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = forwardRef<HTMLDivElement, CartModalProps>(({ isOpen, onClose }, ref) => {
  const { cartItems, removeItem } = useCart();

  if (!isOpen) return null;

  // Calcula o subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 w-[417px] h-[746px] bg-white shadow-lg z-50 overflow-hidden"
    >
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={onClose}
      >
        <img src="/src/imgs/closeIcon.png" alt="Fechar" />
      </div>
      <div className="p-4 h-full flex flex-col">
        <h2 className='mb-3'>Shopping Cart</h2>
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
                  <div className='flex-1'>
                    <div className='font-semibold'>{item.title}</div>  
                    <div>{item.quantity} x <span className='text-amareloQueimado'>R${item.price.toFixed(2)}</span></div>
                  </div>
                  <button
                    className='text-red-500 ml-4'
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className='mt-4 flex justify-between font-bold text-lg'>
          <span>Subtotal:</span>
          <span>R${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
});

export default CartModal;









