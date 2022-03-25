import React from 'react';

import SubCatalogueListSection from './SubCatalogueListSection';

import classes from './SubCatalogueList.module.css';

const SubCatalogueList = (props) => {
  const { sections } = props;
  return (
    <ul className={classes.list}>
      {sections &&
        sections.map((section) => (
          <SubCatalogueListSection
            key={section.title}
            title={section.title}
            linkTo={section.linkTo}
            options={section.options}
          />
        ))}
    </ul>
  );
};

export default SubCatalogueList;
