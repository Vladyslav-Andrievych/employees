import { filtersList } from '../../Filters/components/PositionTabs/configs';
import type { Employee } from '../../../entities/employees/types';

const filterEmployeesByPosition = (
  employeeList: Employee[] | [],
  filterNumber: number,
): Employee[] | [] => {
  const filterData = filtersList.find(({ id }) => id === filterNumber);

  return filterData?.name === 'all'
    ? employeeList
    : employeeList.filter(({ position }) => position.toLowerCase() === filterData?.name);
};

const filterBySearchValues = (employeeList: Employee[] | [], searchText: string): Employee[] | [] =>
  employeeList.filter(({ name, tag, email }) => {
    if (name.includes(searchText.toLowerCase())) {
      return true;
    }

    if (tag.includes(searchText.toLowerCase())) {
      return true;
    }

    if (email.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

export const filterEmployeeList = (
  employeeList: Employee[],
  filterNumber: number,
  searchText: string,
): Employee[] | [] => {
  const filteredByPosition = filterEmployeesByPosition(employeeList, filterNumber);
  const filteredBySearchValues = filterBySearchValues(filteredByPosition, searchText);

  return filteredBySearchValues;
};
