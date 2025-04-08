import SearchInput from './components/SearchInput';
import PositionTabs from './components/PositionTabs';

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
  <>
    <SearchInput
      sortValue={sortValue}
      setIsPopupVisible={setIsPopupVisible}
      searchText={searchText}
      setSearchText={setSearchText}
    />
    <PositionTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  </>
);

export default Filters;
