import React from 'react';

import { Routes, Route } from 'react-router';

import Application from './components/pages/Application/Application';
import HomePage from './components/pages/Homepage/HomePage';
import ProductDetailPage from './components/pages/Products/ProductDetailPage';
import ProductListPage from './components/pages/Products/ProductListPage';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Application />}>
        <Route index name='app' element={<HomePage />} />
        <Route name='products' path='products' element={<ProductListPage />} />
        <Route
          name='product-detail'
          path='products/:sku'
          element={<ProductDetailPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
