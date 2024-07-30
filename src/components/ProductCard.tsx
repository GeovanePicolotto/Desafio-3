import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import '../style.css';

const ProductCard: React.FC = () => {
  const { product, loading, error } = useProduct();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate(); 

  // URL da imagem de fallback, rezar pra ela não precisar ser usada
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

  const handleClick = () => {
    if (product && product.id) {
      navigate(`/product/${product.id}`);
    }
  };

  const discountPercentage = product.discountPercentage * 100;

  return (
    <div
      className="relative w-full max-w-xs md:w-[285px] md:h-[446px] mt-5 p-4 cursor-pointer" 
      style={{ fontFamily: 'Poppins, sans-serif' }}
      onClick={handleClick} 
    >
      <img 
        src={hasError ? fallbackImage : product.images.mainImage} 
        alt={product.title} 
        className='w-full h-[301px] object-cover' 
        onError={handleError}
      />
      <div 
        className={`absolute top-8 right-8 w-[48px] h-[48px] rounded-full flex items-center justify-center text-white ${
          discountPercentage > 0 ? 'bg-red-400' : 'bg-green-400'
        }`}
      >
        {discountPercentage > 0 ? `-${discountPercentage.toFixed(0)}%` : 'New'}
      </div>
      <div className='h-[145px] bg-gray-100 p-2'>
        <h1 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {product.title}
        </h1>
        <p className="text-gray-500 text-sm md:text-base overflow-hidden whitespace-nowrap text-ellipsis mb-2">
          {product.description.short}
        </p>
        <div className='flex justify-between'>
        <p className="text-gray-800 font-semibold text-xl">
          R${product.salePrice.toFixed(2)} 
        </p>
        <p className='text-gray-400 text-base line-through'>{product.normalPrice === product.salePrice ? '' : `R$${product.normalPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;













