import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useProduct } from '../context/ProductContext';
import '../style.css';

const SingleProduct: React.FC = () => {
  const { product, loading, error } = useProduct();
  const [hasError, setHasError] = useState<boolean[]>(new Array(4).fill(false)); // Inicializa um array de erros para cada imagem
  const navigate = useNavigate(); 

  // URL da imagem de fallback
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

  const handleError = (index: number) => {
    const newErrors = [...hasError];
    newErrors[index] = true;
    setHasError(newErrors);
  };

  const handleClick = () => {
    if (product && product.id) {
      navigate(`/product/${product.id}`); 
    }
  };

  return (
    <div
      className=" w-full max-w-xs md:w-[285px] md:h-[446px] mt-5 p-4 cursor-pointer" 
      style={{ fontFamily: 'Poppins, sans-serif' }}
      onClick={handleClick}
    >
      
      <div className=''>
      <div className="flex flex-wrap gap-2 mt-2">
        {product.images.gallery.map((image: string, index: number) => (
          <img 
            key={index}
            src={hasError[index + 1] ? fallbackImage : image} 
            alt={`Gallery ${index}`} 
            className='w-[60px] h-[60px] object-cover'
            onError={() => handleError(index + 1)}
          />
        ))}
      </div>

      <img 
        src={hasError[0] ? fallbackImage : product.images.mainImage} 
        alt={product.title} 
        className='w-full h-[301px] object-cover' 
        onError={() => handleError(0)}
      />
      </div>
      
     
      
    </div>
  );
};

export default SingleProduct;
