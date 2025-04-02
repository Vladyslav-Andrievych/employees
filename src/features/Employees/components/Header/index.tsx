import Search from '../Search';
import Filters from '../Filters';

import './index.scss';

type HeaderProps = {
  sortValue: 'alphabet' | 'birthdate';
  setIsPopupVisible: (visible: boolean) => void;
  activeFilter: number;
  setActiveFilter: (filterNumber: number) => void;
  searchText: string;
  setSearchText: (newValue: string) => void;
};

const Header: React.FC<HeaderProps> = ({
  sortValue,
  activeFilter,
  searchText,
  setSearchText,
  setActiveFilter,
  setIsPopupVisible,
}) => (
  <header className="header">
    <h1 className="title">Search</h1>
    <Search
      sortValue={sortValue}
      setIsPopupVisible={setIsPopupVisible}
      searchText={searchText}
      setSearchText={setSearchText}
    />
    <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  </header>
);

export default Header;
