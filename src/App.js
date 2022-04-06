import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path=':sku' element={<ProductPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
