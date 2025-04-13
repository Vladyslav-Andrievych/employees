import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import EmployeesList from '@features/EmployeesList';
import EmployeeInfo from '@features/EmployeeInfo';
import SearchInput from '@features/Filters/components/SearchInput';
import PositionTabs from '@features/Filters/components/PositionTabs';
import SortDialog from '@features/Filters/components/SortDialog';
import { getEmployees } from '@entities/employee/gateways';
import type { Employee } from '@entities/employee/types';

import '@common/styles/common.scss';

function App() {
  const [employeesData, setEmployeesData] = useState<Employee[] | null | []>(null);
  const [isSortDialogVisible, setIsSortDialogVisible] = useState<boolean>(false);

  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-floating-promises
    getEmployees().then(setEmployeesData);
  }, []);

  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="header">
                  <h1 className="title">Search</h1>
                  <SearchInput showSortDialog={() => setIsSortDialogVisible(true)} />
                  <PositionTabs />
                </header>
                <EmployeesList employeesData={employeesData} />
              </>
            }
          />
          {employeesData && employeesData.length !== 0 && (
            <Route
              path="/employees/:employeeId"
              element={<EmployeeInfo employeesData={employeesData} />}
            />
          )}
        </Routes>
        {isSortDialogVisible && <SortDialog hideSortDialog={() => setIsSortDialogVisible(false)} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
