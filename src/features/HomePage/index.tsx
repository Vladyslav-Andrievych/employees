import { useState } from 'react';
import Filters from '../Filters';
import EmployeeList from '../EmployeesList';
import UnexpectedError from '../../common/components/UnexpectedError';
import Loading from '../../common/components/Loading';
import SortDialog from '../Filters/components/SortDialog';
import type { Employee } from '../../entities/employees/types';

import './index.scss';

type HomePageProps = {
  employeesData: Employee[] | null | -1;
};

//TO THINK: There is too many props drilling, consider using context,
//or state management library (like Redux) or some info save in the URL (like sorting or filter values)
const HomePage: React.FC<HomePageProps> = ({ employeesData }) => {
  const [isSortPopupVisible, setIsSortPopupVisible] = useState<boolean>(false);
  const [sortValue, setSortValue] = useState<'alphabet' | 'birthdate'>('alphabet');
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  const mainPageContent = [
    <Filters
      sortValue={sortValue}
      setIsPopupVisible={setIsSortPopupVisible}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      searchText={searchText}
      setSearchText={setSearchText}
    />,
  ];

  if (isSortPopupVisible) {
    mainPageContent.push(
      <SortDialog
        sortValue={sortValue}
        setSortValue={setSortValue}
        setIsPopupVisible={setIsSortPopupVisible}
      />,
    );
  }

  if (employeesData === null) {
    return (
      <>
        {...mainPageContent}
        <Loading />
      </>
    );
  }

  if (employeesData === -1) {
    return (
      <>
        {...mainPageContent}
        <UnexpectedError />
      </>
    );
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Search</h1>
        {...mainPageContent}
      </header>
      <EmployeeList
        employeesData={employeesData}
        activeFilterNumber={activeFilter}
        searchText={searchText}
        sortValue={sortValue}
      />
    </>
  );
};

export default HomePage;
