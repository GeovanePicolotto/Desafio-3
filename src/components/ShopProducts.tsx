import { useState } from 'react';
import ProductCard from './ProductCard'; 
import { ProductProvider } from '../context/ProductContext'; 
import Filter from './Filter'; 

const ShopProducts: React.FC = () => {
  const allProductIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60
  ];

  const start = [3, 6, 8, 13, 17, 21, 22, 25, 27, 29, 33, 34, 37, 39, 41, 50];
  const [filteredProductIds, setFilteredProductIds] = useState(start);

  const filterByCategory = (categoryIds: number[]) => {
    setFilteredProductIds(allProductIds.filter(id => categoryIds.includes(id)));
  };

  const showAllProducts = () => {
    setFilteredProductIds(start);
  };

  const currentCount = filteredProductIds.length;
  const totalCount = allProductIds.length;

  return (
    <div className="flex flex-col items-center md:w-screen">
      <Filter
        onFilterChange={filterByCategory} 
        onShowAll={showAllProducts}
        currentCount={currentCount}
        totalCount={totalCount}
      />

      <div className="flex flex-wrap md:w-[1236px]">
        {filteredProductIds.length > 0 ? (
          filteredProductIds.map(id => (
            <ProductProvider key={id} productId={id}>
              <ProductCard />
            </ProductProvider>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ShopProducts;






