import { Skeleton as MuiSkeleton } from '@mui/material';

import './index.scss';

const Skeleton = () => (
  <div className="container">
    <MuiSkeleton variant="circular" width={72} height={72} className="circular-skeleton" />
    <div>
      <MuiSkeleton variant="rounded" width={144} height={16} className="rounded-skeleton" />
      <MuiSkeleton variant="rounded" width={80} height={12} className="rounded-skeleton" />
    </div>
  </div>
);

export default Skeleton;
