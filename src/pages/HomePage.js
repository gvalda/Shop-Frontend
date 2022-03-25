import React, { Fragment } from 'react';

import BoxWidthDeterrent from '../layouts/BoxWidthDeterrent';
import OneToTwoColumns from '../layouts/grid/OneToTwoColumns';

import HomeHeader from '../components/presets/Headers/HomeHeader';
import VerticalCatalogue from '../components/presets/Catalogs/VerticalCatalogue';
import SearchProductBar from '../components/presets/SearchBars/SearchProductBar';

const HomePage = () => {
  return (
    <Fragment>
      <HomeHeader />
      <BoxWidthDeterrent>
        <OneToTwoColumns>
          <OneToTwoColumns.Column>
            <VerticalCatalogue />
          </OneToTwoColumns.Column>
          <OneToTwoColumns.Column>
            <SearchProductBar />
            <div>123</div>
          </OneToTwoColumns.Column>
        </OneToTwoColumns>
      </BoxWidthDeterrent>
    </Fragment>
  );
};

export default HomePage;
