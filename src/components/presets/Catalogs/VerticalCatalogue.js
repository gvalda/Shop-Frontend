import React from 'react';

import CatalogueList from './CatalogueList';

import classes from './VerticalCatalogue.module.css';

const VerticalCatalogue = () => {
  return (
    <aside className={classes.catalogue}>
      <CatalogueList />
    </aside>
  );
};

export default VerticalCatalogue;
