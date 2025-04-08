import { useRef } from 'react';
import Employee from './components/Employee/index.tsx';
import NoDataFound from './components/NoDataFound/index.tsx';
import { Link } from 'react-router';
import { filterEmployeeList } from './utils/index.ts';
import type { Employee as EmployeeType } from '../../entities/employees/types/index.ts';

import './index.scss';

type EmployeeListProps = {
  employeesData: EmployeeType[];
  activeFilterNumber: number;
  searchText: string;
  sortValue: 'alphabet' | 'birthdate';
};

const EmployeeList: React.FC<EmployeeListProps> = ({
  employeesData,
  activeFilterNumber,
  searchText,
  sortValue,
}) => {
  //TO THINK: Don't use refs for hold this kind of information, consider another implementation
  //for exapmle, transform list of employeeData into Object like ({ [birthYear]: [employee1, employee2, ...], ...})
  //and use different render logic (or addapt already existing one) for different value of sortValue variable ('alphabet' | 'birthdate')
  const currentYear = useRef<null | number>(null);

  const filteredEmployeeList = filterEmployeeList(employeesData, activeFilterNumber, searchText);
  const sortedEmployeeList = [...filteredEmployeeList]
    .sort((a, b) =>
      sortValue === 'alphabet' ? a.name.localeCompare(b.name) : a.birthDate - b.birthDate,
    )
    .map(employee => ({
      ...employee,
      birthYear: new Date(employee.birthDate).getFullYear(),
    }));

  if (filteredEmployeeList.length === 0) {
    return <NoDataFound />;
  }

  return (
    <div className="employee-list">
      {sortedEmployeeList.map(employee => {
        let showYearSectionHeader = false;

        if (sortValue === 'birthdate' && currentYear.current !== employee.birthYear) {
          showYearSectionHeader = true;
          currentYear.current = employee.birthYear;
        }

        return (
          <div className="employee-list__item-container" key={employee.id}>
            {showYearSectionHeader && (
              <div className="emoloyee-list-item-divider">
                <hr />
                <span>{employee.birthYear}</span>
                <hr />
              </div>
            )}
            <Link to={`/employees/${employee.id}`} className="employee-list__item-link">
              <Employee employeeData={employee} showBirthdateInfo={sortValue === 'birthdate'} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
