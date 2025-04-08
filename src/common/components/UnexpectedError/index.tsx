import './index.scss';

const UnexpectedError = () => (
  <div className="container">
    <div className="error">
      <img src="/images/flying-saucer.png" alt="Flying saucer image" className="error__img" />
      <p className="error__info">Unexpected error occurred...</p>
      <p className="error__text">Try again a bit later</p>
      <button className="error__reload-page-btn" onClick={() => window.location.reload()}>
        Reload page
      </button>
    </div>
  </div>
);

export default UnexpectedError;
