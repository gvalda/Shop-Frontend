import React from 'react';

import { Link } from 'react-router-dom';

import classes from './ProductListItem.module.css';

const ProductListItem = ({ sku, name, description }) => {
  return (
    <li className={classes['product-list-item']}>
      <Link to={`/products/${sku}`}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
          alt='item-image'
        />
        <h4>{name}</h4>
      </Link>
    </li>
  );
};

export default ProductListItem;
