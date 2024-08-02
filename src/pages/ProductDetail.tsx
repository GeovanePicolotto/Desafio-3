import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductProvider } from '../context/ProductContext';
import Header from '../components/Header';
import SingleProduct from '../components/SingleProduct';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>ID do produto não encontrado.</p>;
  }

  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return <p>ID do produto inválido.</p>;
  }

  

  return (
    <div>
      <Header/>
     <ProductProvider productId={productId}>
        <SingleProduct />
      </ProductProvider>
    </div>
  );
};

export default ProductDetail;


