import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/UI/animations/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getProduct } from '../lib/api';

const ProductPage = () => {
  const params = useParams();
  const { sku } = params;

  const {
    sendRequest,
    status,
    data: product,
    error,
  } = useHttp(getProduct, true);

  useEffect(() => {
    sendRequest(sku);
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
    </Fragment>
  );
};

export default ProductPage;
