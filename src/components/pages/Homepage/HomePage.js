import React from 'react';

import OneToTwoColumns from '../../common/layouts/Grids/OneToTwoColumns';

import VerticalCatalogue from '../../common/catalogs/VerticalCatalogue';
import SearchProductBar from '../../common/navigation/SearchProductBar';
import ProductList from '../../../features/Products/ProductList';

const HomePage = () => {
  return (
    <OneToTwoColumns>
      <OneToTwoColumns.Column>
        <VerticalCatalogue />
      </OneToTwoColumns.Column>
      <OneToTwoColumns.Column>
        <SearchProductBar />
        <ProductList />
      </OneToTwoColumns.Column>
    </OneToTwoColumns>
  );
};

export default HomePage;
