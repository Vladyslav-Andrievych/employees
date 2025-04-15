import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Filters from '@features/Filters';
import EmployeesList from '@features/EmployeesList';
import EmployeeInfo from '@features/EmployeeInfo';
import { getEmployees } from '@entities/employee/gateways';
import type { Employee } from '@entities/employee/types';

import '@common/styles/common.scss';

const App: React.FC = () => {
  const [employeesData, setEmployeesData] = useState<Employee[] | null | []>(null);

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
                <Filters />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
