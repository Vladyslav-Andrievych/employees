import { useSearchParams } from 'react-router';

import './index.scss';

type SearchInputProps = {
  showSortDialog: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ showSortDialog }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      event.target.value === ''
        ? params.delete('filter')
        : params.set('filter', event.target.value);
      return params;
    });
  };

  return (
    <div className="search-field">
      <label className="search-field__label">
        <input
          type="text"
          className="search-field__input"
          id="searchText"
          name="searchText"
          placeholder="Enter name, tag, email..."
          value={(searchParams.get('filter') as string) || ''}
          onChange={handleSearchInputChange}
        />
        <i className="fa-solid fa-magnifying-glass search-field__icon"></i>
      </label>
      <button className="search-field__sort-btn" onClick={showSortDialog}>
        <img
          src={
            searchParams.get('sortBy') ? '/images/sort-icon_active.png' : '/images/sort-icon.png'
          }
          alt="Sort button icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
