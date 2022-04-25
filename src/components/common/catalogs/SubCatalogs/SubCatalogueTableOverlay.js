import React, { useEffect, useRef } from 'react';
import SubCatalogueList from './SubCatalogueList';

import classes from './SubCatalogueTableOverlay.module.css';

const SubCatalogueTableOverlay = (props) => {
  const overlayRef = useRef();

  const { x, y, content: sections } = props;

  useEffect(() => {
    overlayRef.current.style.top = y + 'px';
    overlayRef.current.style.left = x + 'px';
    // overlayRef.current.style.backgroundColor = 'yellow';
    overlayRef.current.style.display = 'block';
  }, [x, y]);

  return (
    <div className={classes.overlay} ref={overlayRef}>
      <SubCatalogueList sections={sections} />
    </div>
  );
};

export default SubCatalogueTableOverlay;
