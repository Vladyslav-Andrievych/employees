import type { Employee } from '@entities/employee/types';

const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const getEmployees = async (): Promise<Employee[] | []> => {
  try {
    const response = await fetch(baseUrl);

    if (response.ok) {
      return (await response.json()) as Employee[];
    }

    throw new Error('Error occurred when fetching employees info');
  } catch (error) {
    console.error(error);
    return [];
  }
};
