import { filtersList } from './configs';

import './index.scss';

type FiltersProps = {
  activeFilter: number;
  setActiveFilter: (filterNumber: number) => void;
};

const Filters: React.FC<FiltersProps> = ({ activeFilter, setActiveFilter }) => (
  <ul className="filters-list">
    {filtersList.map(({ id, value }) => (
      <li
        key={id}
        className={`filters-list__item ${activeFilter === id && 'filters-list__item_active'}`}
        onClick={() => setActiveFilter(id)}
      >
        {value}
      </li>
    ))}
  </ul>
);

export default Filters;
