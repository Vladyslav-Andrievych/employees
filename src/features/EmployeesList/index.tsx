import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import Loading from '@common/components/Loading';
import Error from '@features/Error';
import { errorConfig } from '@features/Error/configs';
import EmployeeCard from './components/EmployeeCard';
import type { Employee } from '@entities/employee/types';

import './index.scss';

type EmployeeListProps = {
  employeesData: Employee[] | null | [];
};

const EmployeesList: React.FC<EmployeeListProps> = ({ employeesData }) => {
  const [searchParams] = useSearchParams();

  const filteredEmployees: Employee[] | [] = useMemo(() => {
    if (!employeesData || employeesData.length === 0) return [];

    const {
      position: positionQuery,
      filter: filterText,
      sortBy,
    } = Object.fromEntries(searchParams);

    const filteredData = employeesData.filter(
      ({ position, name, tag, email }) =>
        (!positionQuery || position.toLowerCase() === positionQuery.toLowerCase()) &&
        (!filterText ||
          [name, tag, email].some(field =>
            field?.toLowerCase().includes(filterText.toLowerCase()),
          )),
    );

    return filteredData.sort((a, b) =>
      sortBy ? a.birthDate - b.birthDate : a.name.localeCompare(b.name),
    );
  }, [searchParams, employeesData]);

  if (employeesData === null) {
    return <Loading />;
  }

  if (employeesData.length === 0) {
    return <Error {...errorConfig.unexpectedError} />;
  }

  if (filteredEmployees.length === 0) {
    return <Error {...errorConfig.noDataFound} />;
  }

  return (
    <>
      <div className="employee-list">
        {filteredEmployees.map((employee, index) => (
          <div className="employee-list__item-container" key={employee.id}>
            <Link to={`/employees/${employee.id}`} className="employee-list__item-link">
              <EmployeeCard
                sortedEmployeeList={filteredEmployees}
                employeeData={employee}
                currentItemIndex={index}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeesList;
