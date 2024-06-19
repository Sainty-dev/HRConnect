import AsyncStorage from '@react-native-async-storage/async-storage';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  dob: string;
  skills: string[];
}

const initialEmployees: Employee[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    contactNumber: '123-456-7890',
    dob: '2020-01-01',
    skills: ['JavaScript', 'React Native'],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    contactNumber: '123-456-7891',
    dob: '2015-05-12',
    skills: ['Java', 'Spring'],
  },
  // Add more initial employees here
];

export const loadEmployeesFromStorage = async (): Promise<Employee[]> => {
  try {
    const storedEmployees = await AsyncStorage.getItem('employees');
    if (storedEmployees) {
      return JSON.parse(storedEmployees);
    } else {
      return initialEmployees;
    }
  } catch (error) {
    console.error(error);
    return initialEmployees;
  }
};

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
          skill.toLowerCase().includes(filterSkill.toLowerCase()),
        )
      : true;

    return matchesSearchQuery && matchesYear && matchesSkill;
  });
};
