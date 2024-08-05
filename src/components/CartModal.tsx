// CartModal.tsx
import React, { forwardRef } from 'react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = forwardRef<HTMLDivElement, CartModalProps>(({ isOpen, onClose }, ref) => {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 w-[417px] h-[746px] bg-white shadow-lg z-50"
    >
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={onClose}
      >
        <img src="/src/imgs/closeIcon.png" alt="Fechar" />
      </div>
      <div className="p-4">
        <h2>Carrinho</h2>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} - R${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

export default CartModal;






