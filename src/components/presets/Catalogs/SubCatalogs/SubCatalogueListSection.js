import React from 'react';
import { NavLink } from 'react-router-dom';

import SubCatalogueListItem from './SubCatalogueListItem';

import classes from './SubCatalogueListSection.module.css';

const SubCatalogueListSection = (props) => {
  const { title, linkTo, options } = props;
  return (
    <li>
      <section>
        <NavLink to={linkTo}>
          <h4>{title}</h4>
        </NavLink>
        <ul>
          {options &&
            options.map((option) => (
              <SubCatalogueListItem
                key={option.title}
                title={option.title}
                linkTo={option.linkTo}
              />
            ))}
        </ul>
      </section>
    </li>
  );
};

export default SubCatalogueListSection;
