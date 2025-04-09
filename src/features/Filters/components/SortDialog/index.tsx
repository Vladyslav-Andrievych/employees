import './index.scss';

type SortDialogProps = {
  sortValue: 'alphabet' | 'birthdate';
  setSortValue: (sortStr: 'alphabet' | 'birthdate') => void;
  setIsPopupVisible: (visible: boolean) => void;
};

const SortDialog: React.FC<SortDialogProps> = ({ sortValue, setSortValue, setIsPopupVisible }) => (
  <div
    className="overlay"
    onClick={(event: React.SyntheticEvent) => {
      event.stopPropagation();

      const targetClassName = (event.target as Element).className;

      if (
        targetClassName === 'overlay' ||
        targetClassName === 'modal__close-btn' ||
        targetClassName === 'fa-solid fa-xmark'
      ) {
        setIsPopupVisible(false);
      }
    }}
  >
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
            checked={sortValue === 'alphabet'}
            onChange={() => setSortValue('alphabet')}
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
            checked={sortValue === 'birthdate'}
            onChange={() => setSortValue('birthdate')}
          />
          By birthdate
        </label>
      </div>
    </div>
  </div>
);

export default SortDialog;
