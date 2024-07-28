// ProductContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './Types';

interface ProductContextType {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextType>({
  product: null,
  loading: true,
  error: null,
});

export const ProductProvider: React.FC<React.PropsWithChildren<{ productId: number }>> = ({ children, productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Product>(`http://localhost:3000/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar o produto:', err.response?.data || err.message || err);
        setError('Erro ao buscar o produto');
        setLoading(false);
      });
  }, [productId]);

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);




