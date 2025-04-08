import Skeleton from '../Skeleton';

import './index.scss';

const Loading = () => {
  //TO THINK: consider to make the amount of skeletons more flexible, for example
  //depending on viewport height
  const content = new Array(10).fill(null).map((_, index) => <Skeleton key={index} />);

  return <div className="loading-container">{content}</div>;
};

export default Loading;
