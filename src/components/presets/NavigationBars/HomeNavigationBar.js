import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HomeNavigationBar.module.css';

const HomeNavigationBar = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavigationBar;
