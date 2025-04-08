import { BrowserRouter, Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import HomePage from './features/HomePage';
import EmployeeInfo from './features/EmployeeInfo';
import { getEmployees } from './entities/employees/gateways';
import type { Employee } from './entities/employees/types';

import './common/styles/common.scss';

function App() {
  const [employeesData, setEmployeesData] = useState<Employee[] | null | -1>(null);

  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-floating-promises
    getEmployees().then(setEmployeesData);
  }, []);

  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage employeesData={employeesData} />} />
          {employeesData && employeesData !== -1 && (
            <Route
              path="/employees/:employeeId"
              element={<EmployeeInfo employeesData={employeesData} />}
            />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
