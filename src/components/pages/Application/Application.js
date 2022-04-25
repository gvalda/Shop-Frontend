import React, { Fragment } from 'react';

import { Outlet } from 'react-router-dom';
import BoxWidthDeterrent from '../../common/layouts/Boxes/BoxWidthDeterrent';
import MainHeader from '../../common/layouts/Headers/MainHeader';

const Application = () => {
  return (
    <Fragment>
      <MainHeader />
      <BoxWidthDeterrent>
        <Outlet />
      </BoxWidthDeterrent>
    </Fragment>
  );
};

export default Application;
