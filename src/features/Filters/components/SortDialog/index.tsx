import { useSearchParams } from 'react-router';

import './index.scss';

type SortDialogProps = {
  hideSortDialog: () => void;
};

const SortDialog: React.FC<SortDialogProps> = ({ hideSortDialog }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (newSortValue: 'alphabet' | 'birthdate') => {
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      //eslint-disable-next-line @typescript-eslint/no-unused-expressions
      newSortValue === 'alphabet' ? params.delete('sortBy') : params.set('sortBy', newSortValue);
      return params;
    });
  };

  return (
    <div className="overlay" onClick={hideSortDialog}>
      <div className="modal" onClick={(event: React.SyntheticEvent) => event.stopPropagation()}>
        <button className="modal__close-btn" onClick={hideSortDialog}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h4 className="modal__title">Sorting</h4>
        <div className="modal__radio">
          <label className="modal__radio-label">
            <input
              type="radio"
              id="alphabet"
              name="sorting"
              value="alphabet"
              className="modal__radio-input"
              checked={!searchParams.get('sortBy')}
              onChange={() => handleSortChange('alphabet')}
            />
            By alphabet
          </label>
          <label className="modal__radio-label">
            <input
              type="radio"
              id="birthdate"
              name="sorting"
              value="birthdate"
              className="modal__radio-input"
              checked={!!searchParams.get('sortBy')}
              onChange={() => handleSortChange('birthdate')}
            />
            By birthdate
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortDialog;
