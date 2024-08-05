// Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Atualize para useNavigate
import NavBar from './NavBar';
import CartModal from './CartModal';

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // useNavigate em vez de useHistory

  const handleLoginClick = () => {
    navigate('/login'); // Navega para a página de login
  };

  const handleCartClick = () => {
    setIsCartOpen(true); // Abre o modal do carrinho
  };

  const handleCloseModal = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="flex justify-center items-center w-screen h-36 md:h-20">
        <div className="flex flex-col gap-4 w-10/12 h-10 justify-center items-center md:flex md:flex-row md:justify-between md:h-10">
          <img src="/src/imgs/furniro_logo.png" alt="Furniro Logo" />
          <NavBar />
          <div className="flex justify-center items-center w-24 gap-4">
            <a href="#" onClick={handleLoginClick}>
              <img src="/src/imgs/userLogo.png" alt="Ícone usuário" />
            </a>
            <a href="#" onClick={handleCartClick}>
              <img src="/src/imgs/shopIcon.png" alt="Ícone carrinho de compras" />
            </a>
          </div>
        </div>
      </header>
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" aria-hidden="true" />
          <CartModal isOpen={isCartOpen} onClose={handleCloseModal} ref={modalRef} />
        </>
      )}
    </>
  );
};

export default Header;






