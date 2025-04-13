import { useSearchParams } from 'react-router';
import { getPrevSearchParams } from '@utils/index.ts';
import { positionTabs } from './configs';
import type { Position } from '@entities/employee/types';

import './index.scss';

const PositionTabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterItemClick(positionValue: 'all' | Position) {
    if (positionValue === 'all') {
      searchParams.delete('position');
      setSearchParams(searchParams);
    } else {
      const prevSearchParams = getPrevSearchParams(searchParams);
      setSearchParams({
        ...prevSearchParams,
        position: positionValue as string,
      });
    }
  }

  return (
    <ul className="filters-list">
      {positionTabs.map(({ value, name }, index) => {
        const itemClassNames = ['filters-list__item'];

        if (
          searchParams.get('position') === value ||
          (!searchParams.get('position') && value === 'all')
        ) {
          itemClassNames.push('filters-list__item_active');
        }

        return (
          <li
            key={index}
            className={itemClassNames.join(' ')}
            onClick={() => handleFilterItemClick(value)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default PositionTabs;
