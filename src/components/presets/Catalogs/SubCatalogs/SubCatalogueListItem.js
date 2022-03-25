import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SubCatalogueListItem.module.css';

const SubCatalogueListItem = (props) => {
  const { title, linkTo } = props;

  return (
    <li>
      <NavLink to={linkTo}>{title}</NavLink>
    </li>
  );
};

export default SubCatalogueListItem;
