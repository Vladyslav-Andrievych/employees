import './index.scss';

type SortPopupProps = {
  sortValue: 'alphabet' | 'birthdate';
  setSortValue: (sortStr: 'alphabet' | 'birthdate') => void;
  setIsPopupVisible: (visible: boolean) => void;
};

const SortPopup: React.FC<SortPopupProps> = ({ sortValue, setSortValue, setIsPopupVisible }) => (
  <div className="overlay">
    <div className="modal">
      <button className="modal__close-btn" onClick={() => setIsPopupVisible(false)}>
        +
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

export default SortPopup;
