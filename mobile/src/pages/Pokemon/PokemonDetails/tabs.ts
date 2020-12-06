import { Pokemon } from '../../../types';

import About from './About';
import BaseStats from './BaseStats';
import Evolution from './Evolution';
import Moves from './Moves';

export type TabProps = {
  pokemon: Pokemon;
};

const tabs = [
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Base Stats',
    component: BaseStats,
  },
  {
    name: 'Evolution',
    component: Evolution,
  },
  {
    name: 'Moves',
    component: Moves,
  },
];

export default tabs;
