import React from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = (props) => {
  const { sku, name, description } = props;

  return (
    <li>
      <Link to={`/${sku}`}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </li>
  );
};

export default ProductListItem;
