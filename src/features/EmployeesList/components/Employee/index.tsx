import moment from 'moment';
import type { Employee } from '../../../../entities/employees/types';

import './index.scss';

type EmployeeProps = {
  employeeData: Employee;
  showBirthdateInfo: boolean;
};

const Employee: React.FC<EmployeeProps> = ({ employeeData, showBirthdateInfo }) => {
  const { avatar, name, tag, position, birthDate: birthDateTimeStamp } = employeeData;

  return (
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
      {showBirthdateInfo && (
        <span className="employee__birthdate">
          {moment(new Date(birthDateTimeStamp)).format('MMM Do')}
        </span>
      )}
    </div>
  );
};

export default Employee;
