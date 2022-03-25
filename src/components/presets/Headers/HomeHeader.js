import React from 'react';

import HomeNavigationBar from '../NavigationBars/HomeNavigationBar';

import classes from './HomeHeader.module.css';

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <HomeNavigationBar />
    </header>
  );
};

export default HomeHeader;
