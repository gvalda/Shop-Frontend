import React from 'react';

import KitchenPot from '../icons/KitchenPot';
import BathroomBath from '../icons/BathroomBath';
import GameController from '../icons/GameController';

import CatalogueListItem from './CatalogueListItem';

const CatalogueList = () => {
  return (
    <ul>
      <CatalogueListItem
        icon={<GameController />}
        title='Devices for gaming'
        innerSections={[
          {
            title: 'Gaming computers',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
              { title: 'Acer', linkTo: '/mac-computers' },
              { title: 'Dell', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming monitors',
            linkTo: '/category-detailed',
            options: [
              { title: 'Acer monitor', linkTo: '/rog-computers' },
              { title: 'Asus monitor', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming mouses',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming keyboards',
            linkTo: '/category-detailed',
            options: [
              { title: 'Acer monitor', linkTo: '/rog-computers' },
              { title: 'Asus monitor', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming microphones',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming speakers',
            linkTo: '/category-detailed',
            options: [
              { title: 'Acer monitor', linkTo: '/rog-computers' },
              { title: 'Asus monitor', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming mouse pads',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming tables',
            linkTo: '/category-detailed',
            options: [
              { title: 'Acer monitor', linkTo: '/rog-computers' },
              { title: 'Asus monitor', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming chairs',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
          {
            title: 'Gaming laps',
            linkTo: '/category-detailed',
            options: [
              { title: 'Acer monitor', linkTo: '/rog-computers' },
              { title: 'Asus monitor', linkTo: '/mac-computers' },
            ],
          },
        ]}
      />
      <CatalogueListItem
        icon={<KitchenPot />}
        title='Devices for kitchen'
        innerSections={[
          {
            title: 'Gaming computers',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
        ]}
      />
      <CatalogueListItem
        icon={<BathroomBath />}
        title='Devices for bathroom'
        innerSections={[
          {
            title: 'Gaming computers',
            linkTo: '/category-detailed',
            options: [
              { title: 'ROG computers', linkTo: '/rog-computers' },
              { title: 'Mac', linkTo: '/mac-computers' },
            ],
          },
        ]}
      />
    </ul>
  );
};

export default CatalogueList;
