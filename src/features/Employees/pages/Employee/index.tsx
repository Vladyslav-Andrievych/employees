import { Link, useParams } from 'react-router';
import moment from 'moment';
import type { Employee } from '../../../../entities/employees/types/index.ts';

import './index.scss';

type EmployeePageProps = {
  employeesData: Employee[];
};

const EmployeePage: React.FC<EmployeePageProps> = ({ employeesData }) => {
  const { employeeId } = useParams();

  const {
    name,
    position,
    birthDate: birthDateTimeStamp,
    phone,
    avatar,
    tag,
  } = employeesData.find(({ id }) => id === employeeId) as Employee;

  const birthDate = moment(new Date(birthDateTimeStamp)).format('MMM Do YYYY');
  const fullYears = Math.trunc((Number(new Date()) - birthDateTimeStamp) / 31540000000);

  return (
    <div className="employee-page">
      <header className="employee-page__header">
        <Link to="/" className="employee-page__back-link">
          <img src="/back-icon.png" alt="Back icon" />
        </Link>
        <div className="employee-page__main-info">
          <img src={avatar} alt="Employee avatar" className="employee-page__avatar" />
          <p className="employee-page__name">
            {name}
            <span className="employee-page__tag">{tag}</span>
          </p>
          <span className="employee-page__position">{position}</span>
        </div>
      </header>
      <div className="employee-page__info">
        <div className="employee-page__info-block">
          <img
            src="/favourite-star-icon.png"
            alt="Favourite star icon"
            className="employee-page__info-block-img"
          />
          <span className="employee-page__info-block-text">{birthDate}</span>
          <span className="employee-page__info-block-additonal-text">{`${fullYears} years old`}</span>
        </div>
        <div className="employee-page__info-block">
          <img
            src="/phone-icon.png"
            alt="Favourite star icon"
            className="employee-page__info-block-img"
          />
          <span className="employee-page__info-block-text">{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
