import './index.scss';

type SearchInputProps = {
  sortValue: 'alphabet' | 'birthdate';
  setIsPopupVisible: (visible: boolean) => void;
  searchText: string;
  setSearchText: (newValue: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  sortValue,
  searchText,
  setSearchText,
  setIsPopupVisible,
}) => (
  <div className="search-field">
    <label className="search-field__label">
      <input
        type="text"
        className="search-field__input"
        id="searchText"
        name="searchText"
        placeholder="Enter name, tag, email..."
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass search-field__icon"></i>
    </label>
    <button className="search-field__sort-btn" onClick={() => setIsPopupVisible(true)}>
      <img
        src={sortValue === 'alphabet' ? '/images/sort-icon.png' : '/images/sort-icon_active.png'}
        alt="Sort button icon"
      />
    </button>
  </div>
);

export default SearchInput;
