import React from 'react';

import classes from './OneToTwoColumn.module.css';

const OneToTwoColumns = (props) => {
  return <div className={classes.grid}>{props.children}</div>;
};

OneToTwoColumns.Column = (props) => {
  return <div className={classes.column}>{props.children}</div>;
};

export default OneToTwoColumns;
