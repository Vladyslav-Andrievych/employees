import { Link, useParams } from 'react-router';
import moment from 'moment';
import type { Employee } from '@entities/employee/types';

import './index.scss';

const MILLISECONDS_IN_A_YEAR = 31540000000;

type EmployeeInfoProps = {
  employeesData: Employee[];
};

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ employeesData }) => {
  const { employeeId } = useParams();

  const {
    name,
    position,
    birthDate: birthDateTimeStamp,
    phone,
    avatar,
    tag,
  } = employeesData.find(({ id }) => id === employeeId) as Employee;

  const fullYears = Math.trunc((Number(new Date()) - birthDateTimeStamp) / MILLISECONDS_IN_A_YEAR);

  return (
    <div className="employee-page">
      <header className="employee-page__header">
        <Link to="/" className="employee-page__back-link">
          <img src="/images/back-icon.png" alt="Back icon" />
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
            src="/images/favourite-star-icon.png"
            alt="Favourite star icon"
            className="employee-page__info-block-img"
          />
          <span className="employee-page__info-block-text">
            {moment(birthDateTimeStamp).format('MMM Do YYYY')}
          </span>
          <span className="employee-page__info-block-additonal-text">{`${fullYears} years old`}</span>
        </div>
        <div className="employee-page__info-block">
          <img
            src="/images/phone-icon.png"
            alt="Favourite star icon"
            className="employee-page__info-block-img"
          />
          <span className="employee-page__info-block-text">{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
