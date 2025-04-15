import { useState } from 'react';
import SearchInput from '@features/Filters/components/SearchInput';
import PositionTabs from '@features/Filters/components/PositionTabs';
import SortDialog from '@features/Filters/components/SortDialog';

import './index.scss';

const Filters: React.FC = () => {
  const [isSortDialogVisible, setIsSortDialogVisible] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <h1 className="title">Search</h1>
        <SearchInput showSortDialog={() => setIsSortDialogVisible(true)} />
        <PositionTabs />
      </header>
      {isSortDialogVisible && <SortDialog hideSortDialog={() => setIsSortDialogVisible(false)} />}
    </>
  );
};

export default Filters;
