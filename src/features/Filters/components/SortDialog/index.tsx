import { useSearchParams } from 'react-router';
import { getPrevSearchParams } from '@utils/index.ts';

import './index.scss';

type SortDialogProps = {
  hideSortDialog: () => void;
};

const SortDialog: React.FC<SortDialogProps> = ({ hideSortDialog }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleDialogClose(event: React.SyntheticEvent) {
    event.stopPropagation();

    const targetClassName = (event.target as Element).className;

    if (['overlay', 'modal__close-btn', 'fa-solid fa-xmark'].includes(targetClassName)) {
      hideSortDialog();
    }
  }

  return (
    <div className="overlay" onClick={handleDialogClose}>
      <div className="modal">
        <button className="modal__close-btn">
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
              onChange={() => {
                searchParams.delete('sortBy');
                setSearchParams(searchParams);
              }}
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
              onChange={() => {
                const prevSearchParams = getPrevSearchParams(searchParams);
                setSearchParams({
                  ...prevSearchParams,
                  sortBy: 'birthdate',
                });
              }}
            />
            By birthdate
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortDialog;
