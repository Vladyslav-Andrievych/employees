import { useSearchParams } from 'react-router';
import moment from 'moment';
import type { Employee } from '@entities/employee/types';

import './index.scss';

type EmployeeCardProps = {
  sortedEmployeeList: Employee[];
  employeeData: Employee;
  currentItemIndex: number;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  sortedEmployeeList,
  employeeData,
  currentItemIndex,
}) => {
  const [searchParams] = useSearchParams();
  const { avatar, name, tag, position, birthDate } = employeeData;

  const prevBirthDate =
    currentItemIndex > 0 ? sortedEmployeeList[currentItemIndex - 1].birthDate : null;
  const isDividerActive =
    !!searchParams.get('sortBy') &&
    (!prevBirthDate ||
      moment(new Date(birthDate)).format('YYYY') !==
        moment(new Date(prevBirthDate)).format('YYYY'));

  return (
    <>
      {isDividerActive && (
        <div className="emoloyee-list-item-divider">
          <hr />
          <span>{moment(birthDate).format('YYYY')}</span>
          <hr />
        </div>
      )}
      <div className="employee">
        <img
          src={avatar || '/images/employee-standart-avatar.png'}
          alt="Employee avatar"
          className="employee__avatar"
        />
        <div className="employee__info">
          <p className="employee__name">
            {name}
            <span className="employee__tag">{tag}</span>
          </p>
          <span className="employee__position">{position}</span>
        </div>
        {searchParams.get('sortBy') && (
          <span className="employee__birthdate">{moment(birthDate).format('D MMM')}</span>
        )}
      </div>
    </>
  );
};

export default EmployeeCard;
