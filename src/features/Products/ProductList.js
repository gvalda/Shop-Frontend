import React, { useEffect } from 'react';
import LoadingSpinner from '../../components/common/animations/loading/LoadingSpinner';
import classes from './ProductList.module.css';
import { useGetProductsQuery } from '../../app/services/products';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const { data: products, isLoading, isFetching } = useGetProductsQuery();

  if (isLoading) return <LoadingSpinner />;
  if (isFetching) return <div>Loading...</div>;
  if (!products) return <div>No products</div>;

  return (
    <ul className={classes['product-list']}>
      {products.map((product) => (
        <ProductListItem
          key={product.sku}
          sku={product.sku}
          name={product.name}
          description={product.description}
        />
      ))}
    </ul>
  );
};

export default ProductList;
