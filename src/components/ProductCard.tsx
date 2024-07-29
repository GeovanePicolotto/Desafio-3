import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import '../style.css'

const ProductCard: React.FC = () => {
  const { product, loading, error } = useProduct();
  const [hasError, setHasError] = useState(false); 

  // imagfem not found
  const fallbackImage = 'https://th.bing.com/th/id/OIP.o-YG9pqgAWzpXykwjsC9SwHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7';

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  
  const handleError = () => {
    setHasError(true); 
  };

  return (
    <div className="w-full max-w-xs md:w-[285px] md:h-[446px] mt-5 p-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <img 
        src={hasError ? fallbackImage : product.images.mainImage} 
        alt={product.title} 
        className='w-full h-[301px] object-cover' 
        onError={handleError} // Se não carregar a img
      />
      <div className='h-[145px] bg-gray-100 p-2'>
        <h1 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {product.title}
        </h1>
        <p className="text-gray-500 text-sm md:text-base overflow-hidden whitespace-nowrap text-ellipsis mb-2">
          {product.description.short}
        </p>
        <p className="text-gray-800 font-semibold text-lg">
          R${product.salePrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;











