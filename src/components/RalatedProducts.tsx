import React from 'react';
import ProductCard from './ProductCard'; 
import { ProductProvider } from '../context/ProductContext'; 


const RelatedProducts: React.FC = () => {
  const productIds = [2,3,4,5]; 

  return (
    <div className="flex flex-col items-center mt-24 md:w-screen p-4">
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px' }} className='font-bold'>Related Products</h1>
      <div className="flex  flex-wrap md:w-[1236px]">
        {productIds.map(id => (
          <ProductProvider key={id} productId={id}>
            <ProductCard/>
          </ProductProvider>
        ))}
      </div>
      
      
    </div>
  );
}

export default RelatedProducts;