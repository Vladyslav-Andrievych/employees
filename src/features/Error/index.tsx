import { ErrorConfig } from './configs';

import './index.scss';

type ErrorProps = {
  config: ErrorConfig;
};

const Error: React.FC<ErrorProps> = ({ config: { image, info, additionalText, action } }) => (
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
