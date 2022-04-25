import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../app/services/products';
import LoadingSpinner from '../../common/animations/loading/LoadingSpinner';

const ProductDetailPage = () => {
  const params = useParams();
  const { sku } = params;
  const { data: product, isLoading } = useGetProductQuery({ sku });

  if (isLoading) return <LoadingSpinner />;

  if (!product) return <div>No product</div>;

  return (
    <Fragment>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
    </Fragment>
  );
};

export default ProductDetailPage;
