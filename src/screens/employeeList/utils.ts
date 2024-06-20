import AsyncStorage from '@react-native-async-storage/async-storage';
import {Employee} from '../interface';

//Get employees from storage
export const loadEmployeesFromStorage = async (): Promise<Employee[]> => {
  try {
    const storedEmployees = await AsyncStorage.getItem('employees');
    if (storedEmployees) {
      return JSON.parse(storedEmployees);
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

//Filter employees based on search query, year and skill
export const filterEmployees = (
  employees: Employee[],
  searchQuery: string,
  filterYear: string,
  filterSkill: string,
): Employee[] => {
  return employees.filter(employee => {
    const matchesSearchQuery =
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = filterYear
      ? new Date(employee.dob).getFullYear().toString() === filterYear
      : true;
    const matchesSkill = filterSkill
      ? employee.skills.some(skill =>
          skill.skill.toLowerCase().includes(filterSkill.toLowerCase()),
        )
      : true;

    return matchesSearchQuery && matchesYear && matchesSkill;
  });
};
