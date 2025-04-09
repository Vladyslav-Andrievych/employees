import SearchInput from './components/SearchInput';
import PositionTabs from './components/PositionTabs';

import './index.scss';

type HeaderProps = {
  sortValue: 'alphabet' | 'birthdate';
  setIsPopupVisible: (visible: boolean) => void;
  activeFilter: number;
  setActiveFilter: (filterNumber: number) => void;
  searchText: string;
  setSearchText: (newValue: string) => void;
};

const Filters: React.FC<HeaderProps> = ({
  sortValue,
  activeFilter,
  searchText,
  setSearchText,
  setActiveFilter,
  setIsPopupVisible,
}) => (
  <header className="header">
    <h1 className="title">Search</h1>
    <SearchInput
      sortValue={sortValue}
      setIsPopupVisible={setIsPopupVisible}
      searchText={searchText}
      setSearchText={setSearchText}
    />
    <PositionTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  </header>
);

export default Filters;
