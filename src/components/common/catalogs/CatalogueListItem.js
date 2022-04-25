import React, { useEffect, useState, useRef } from 'react';

import { NavLink } from 'react-router-dom';

import classes from './CatalogueListItem.module.css';
import SubCatalogueTableOverlay from './SubCatalogs/SubCatalogueTableOverlay';

const CatalogueListItem = (props) => {
  const [mouseOverItem, setMouseOverItem] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayCoordinates, setOverlayCoordinates] = useState({ x: 0, y: 0 });
  const categoryItemLinkRef = useRef();

  const { icon, title, innerSections } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      const rect = categoryItemLinkRef.current.getBoundingClientRect();
      setOverlayCoordinates({ x: rect.left + rect.width, y: rect.top });
      setShowOverlay(mouseOverItem && innerSections);
    }, 100);
    return () => clearTimeout(timer);
  }, [mouseOverItem, innerSections]);

  return (
    <li
      className={classes.item}
      onMouseEnter={() => {
        setMouseOverItem(true);
      }}
      onMouseLeave={() => {
        setMouseOverItem(false);
      }}
    >
      <NavLink to='/category' ref={categoryItemLinkRef}>
        {icon}
        <h5>{title}</h5>
      </NavLink>
      {showOverlay && (
        <SubCatalogueTableOverlay
          x={overlayCoordinates.x}
          y={overlayCoordinates.y}
          content={innerSections}
        />
      )}
    </li>
  );
};

export default CatalogueListItem;
