import { useState } from 'react';
import Header from '../../components/Header';
import EmployeeList from '../../components/EmployeeList';
import UnexpectedError from '../../../../common/components/UnexpectedError';
import Loading from '../../components/Loading/index.tsx';
import SortPopup from '../../components/SortPopup/index.tsx';
import type { Employee } from '../../../../entities/employees/types/index.ts';

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
    <Header
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
      <SortPopup
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
      {...mainPageContent}
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
