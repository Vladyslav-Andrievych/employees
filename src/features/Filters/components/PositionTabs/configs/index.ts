import type { Position } from '@entities/employee/types';

export type PositionTabsConfig = {
  name: 'All' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';
  value: 'all' | Position;
};

export const positionTabs: PositionTabsConfig[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Designers',
    value: 'designer',
  },
  {
    name: 'Analysts',
    value: 'analyst',
  },
  {
    name: 'Managers',
    value: 'manager',
  },
  {
    name: 'iOS',
    value: 'ios',
  },
  {
    name: 'Android',
    value: 'android',
  },
];
