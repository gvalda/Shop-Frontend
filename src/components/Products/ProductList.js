import React, { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllProducts } from '../../lib/api';
import LoadingSpinner from '../UI/animations/LoadingSpinner';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === 'completed' &&
    (!loadedProducts || loadedProducts.length === 0)
  ) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <ul>
        {loadedProducts.map((product) => {
          return (
            <ProductListItem
              key={product.sku}
              sku={product.sku}
              name={product.name}
              description={product.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
