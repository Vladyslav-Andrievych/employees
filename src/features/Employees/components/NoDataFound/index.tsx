import './index.scss';

//TO THINK: there are same markup and styles with UnexpectedError component, consider to reduce repetitive logic
//for example, made a component configurable
const NoDataFound = () => (
  <div className="no-data-found">
    <img src="/magnifying-glass.png" alt="Magnifying glass image" className="no-data-found__img" />
    <p className="no-data-found__info">We didn't find anyone</p>
    <p className="no-data-found__text">Try to adjust your request</p>
  </div>
);

export default NoDataFound;
