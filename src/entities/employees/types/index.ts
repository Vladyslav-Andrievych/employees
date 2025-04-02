export type Employee = {
  id: string;
  name: string;
  position: string;
  birthDate: number;
  phone: string;
  avatar: string;
  tag: string;
  email: string;
};

export type FiltersValue = 'All' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';

export type FiltersName = 'all' | 'designer' | 'analyst' | 'manager' | 'ios' | 'android';

export type FiltersList = {
  id: number;
  value: FiltersValue;
  name: FiltersName;
}[];
