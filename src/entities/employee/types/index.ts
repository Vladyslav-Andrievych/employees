export type Position = 'designer' | 'analyst' | 'manager' | 'ios' | 'android';

export type Employee = {
  id: string;
  name: string;
  position: Position;
  birthDate: number;
  phone: string;
  avatar: string;
  tag: string;
  email: string;
};
