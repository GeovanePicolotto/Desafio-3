import React from 'react';
import ProductCard from './ProductCard'; 
import { ProductProvider } from '../context/ProductContext'; // Ajuste o caminho conforme necessário
import ShowMore from './ShowMore';

const Products: React.FC = () => {
  const productIds = [1,11,21,31, 52,52,52,52]; 

  return (
    <div className="flex flex-col items-center mt-24 md:w-screen md:h-[1236px] p-4">
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '40px' }} className='font-bold'>Our Products</h1>
      <div className="flex  flex-wrap md:w-[1236px]">
        {productIds.map(id => (
          <ProductProvider key={id} productId={id}>
            <ProductCard/>
          </ProductProvider>
        ))}
      </div>
      <ShowMore/>
    </div>
  );
}

export default Products;

