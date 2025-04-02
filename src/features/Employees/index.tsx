import { useState, useEffect } from 'react';
import HomePage from './pages/Home/index.tsx';
import EmployeePage from './pages/Employee/index.tsx';
import { getEmployees } from '../../entities/employees/gateways';
import { Routes, Route } from 'react-router';
import type { Employee } from '../../entities/employees/types/index.ts';

const Employees = () => {
  const [employeesData, setEmployeesData] = useState<Employee[] | null | -1>(null);

  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-floating-promises
    getEmployees().then(setEmployeesData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage employeesData={employeesData} />} />
      {employeesData && employeesData !== -1 && (
        <Route
          path="/employees/:employeeId"
          element={<EmployeePage employeesData={employeesData} />}
        />
      )}
    </Routes>
  );
};

export default Employees;
