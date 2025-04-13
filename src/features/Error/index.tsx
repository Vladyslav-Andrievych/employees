import './index.scss';

type ErrorProps = {
  image: {
    src: string;
    altText: string;
  };
  info: string;
  additionalText: string;
  action?: {
    func: () => void;
    btnText: string;
  };
};

const Error: React.FC<ErrorProps> = ({ image, info, additionalText, action }) => (
  <div className="error">
    <img src={image.src} alt={image.altText} className="error__img" />
    <p className="error__info">{info}</p>
    <p className="error__text">{additionalText}</p>
    {action && (
      <button className="error__action-btn" onClick={action.func}>
        {action.btnText}
      </button>
    )}
  </div>
);

export default Error;
