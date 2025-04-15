import { useSearchParams } from 'react-router';
import { positionTabs } from './configs';
import type { Position } from '@entities/employee/types';

import './index.scss';

const PositionTabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTabChange = (positionValue: 'all' | Position) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      positionValue === 'all' ? params.delete('position') : params.set('position', positionValue);
      return params;
    });
  };

  return (
    <ul className="filters-list">
      {positionTabs.map(({ value, name }, index) => (
        <li
          key={index}
          className={`filters-list__item ${
            (searchParams.get('position') === value ||
              (!searchParams.get('position') && value === 'all')) &&
            'filters-list__item_active'
          }`}
          onClick={() => handleTabChange(value)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default PositionTabs;
