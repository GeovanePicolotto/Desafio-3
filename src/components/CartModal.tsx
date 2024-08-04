import { forwardRef } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = forwardRef<HTMLDivElement, CartModalProps>(({ isOpen, onClose }, ref) => {
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
      {/* Conteúdo do modal */}
      <div className="p-4">
        <h2>Carrinho</h2>
      </div>
    </div>
  );
});

export default CartModal;





