import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import { useCart } from '../context/CartContext'; // Certifique-se de importar o hook correto
import '../style.css';
import RalatedProducts from './RalatedProducts';
import Footer from './Footer';
import ShowMore from './ShowMore';

const SingleProduct: React.FC = () => {
  const { product, loading, error } = useProduct();
  const { addItem } = useCart(); // Use o contexto do carrinho
  const [hasError, setHasError] = useState<boolean[]>(new Array(4).fill(false));
  const [quantity, setQuantity] = useState<number>(1); // Estado para a quantidade do produto

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

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.salePrice,
        image: product.images.mainImage,
        quantity: quantity
      });
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const seta = '>'

  return (
    <div className='mt-4' style={{ fontFamily: 'Poppins, sans-serif'}}>
      <div className='flex items-center h-[100px] w-screen bg-bannerColor' style={{ fontFamily: 'Poppins, sans-serif'}}> 
        <p className='md:ml-32 text-gray-500'>Home {seta} Shop {seta} <span className='mx-4 h-8 border border-gray-500'></span> <span className='text-black font-normal'>{product.title}</span></p>
      </div>
      <div className='w-full md:w-[1440px] md:h-[820px] md:flex md:flex-col mt-9'>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:items-start">
          <div className='flex flex-col md:flex-row md:w-[553px]'>
            <div className="flex overflow-x-auto gap-2 md:flex-col">
              {product.images.gallery.map((image: string, index: number) => (
                <div className='bg-red-400' key={index}>
                  <img 
                    src={hasError[index + 1] ? fallbackImage : image} 
                    alt={`Gallery ${index}`} 
                    className='w-20 h-20 object-cover'
                    onError={() => handleError(index + 1)}
                  />
                </div>
              ))}
            </div>

            <img 
              src={hasError[0] ? fallbackImage : product.images.mainImage} 
              alt={product.title} 
              className='w-full h-auto object-cover md:w-[423px] md:h-[500px] md:ml-4' 
              onError={() => handleError(0)}
            />
          </div>

          <div className='flex flex-col w-full md:w-[606px] md:h-[730px] md:ml-8'>
            <h1 className='text-2xl md:text-5xl font-bold'>{product.title}</h1>
            <p className='text-xl text-gray-500 mt-2'>R${product.salePrice.toFixed(2)}</p>
            <p className='mt-2'>{product.rating}</p>
            <p className='text-sm mt-2'>{product.description.long}</p>
            <span className='block mt-4 text-lg font-semibold'>Sizes</span>
            <ul className='flex flex-wrap gap-2 mt-2'>
              {product.sizes.map((size, index) => (
                <li className='flex items-center justify-center w-7 h-7 bg-yellow-600 rounded text-white text-xs' key={index}>
                  {size}
                </li>
              ))}
            </ul>
            <span className='block mt-4 text-lg font-semibold'>Color</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              {product.colors.map((color, index) => (
                <div 
                  key={index}
                  className='w-7 h-7 rounded-full' 
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            <div className='flex justify-center mt-4 gap-4 md:justify-start mb-8'>
              <div className='flex items-center border border-black rounded-xl'>
                <button 
                  className='w-8 h-8 flex items-center justify-center'
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className='w-16 h-8 flex items-center justify-center'>{quantity}</span>
                <button 
                  className='w-8 h-8 flex items-center justify-center'
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button 
                className='border border-black w-[215px] h-[64px] rounded-2xl font-normal'
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
            
            <div className='w-full h-[1px] bg-gray-300 my-4'></div>

            <div className='mt-3 text-gray-400'>
              <p className='pb-4'>SKU<span className='ml-[61px]'>:</span> <span className='ml-3'>{product.sku}</span></p>
              <p className='pb-4'>Category<span className='ml-[15px]'>:</span> <span className='ml-3'>{product.category}</span></p>
              <ul className='flex gap-2 pb-4'>
                Tags<span className='ml-[44px]'>:</span>
                {product.tags.map((tag, index) => (
                  <li key={index} className='ml-2'>{tag},</li>
                ))}
              </ul>
              <p>Share<span className='ml-[45px]'>:</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:h-[744px] border border-gray-300 p-4 md:p-8'>
        <div className='flex flex-col md:flex-row justify-center text-xl md:text-2xl gap-8 md:gap-32 mt-8 md:mt-24 mb-6 md:mb-8'>
          <h1 className='font-medium'>Description</h1>
          <h1 className='text-gray-400'>Additional Information</h1>
        </div>
        <div className='flex flex-col m-auto md:max-w-[1026px] gap-4 text-gray-400'>
          <p>{product.description.short}</p>
          <p>{product.description.long}</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-6 md:mt-8'>
          <img src={product.images.mainImage} alt="" className='w-full md:w-[605px] md:h-[348px] object-cover'/>
          <img src={product.images.mainImage} alt="" className='w-full md:w-[605px] md:h-[348px] object-cover'/>
        </div>
      </div>

      <RalatedProducts/>
      <div className='flex justify-center'>
        <ShowMore/>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleProduct;






