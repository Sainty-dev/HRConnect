import AsyncStorage from '@react-native-async-storage/async-storage';
import {Employee, Skill} from './interface';
import { Alert } from 'react-native';

export const addSkill = (
  setEditableEmployee: React.Dispatch<React.SetStateAction<Employee>>,
) => {
  setEditableEmployee(prev => ({
    ...prev,
    skills: [
      ...(prev.skills ?? []),
      {skill: '', yearExp: 0, seniorityRating: ''},
    ],
  }));
};

export const deleteSkill = (
  index: number,
  setEditableEmployee: React.Dispatch<React.SetStateAction<Employee>>,
) => {
  setEditableEmployee(prev => ({
    ...prev,
    skills: prev.skills.filter((_, i) => i !== index),
  }));
};

export const updateSkill = (
  index: number,
  field: keyof Skill,
  value: any,
  editableEmployee: Employee,
  setEditableEmployee: (employee: Employee) => void,
) => {
  const updatedSkills = editableEmployee?.skills.map((skill, i) =>
    i === index ? {...skill, [field]: value} : skill,
  );
  setEditableEmployee({...editableEmployee, skills: updatedSkills});
};

export const saveEmployee = async (
  editableEmployee: Employee,
  navigation: any,
) => {
console.log(editableEmployee);
  try {
    // Validate all fields
    const requiredFields = [
      'firstName',
      'lastName',
      'contactNumber',
      'dob',
      'address',
      'city',
      'country',
      'postalCode',
      'email',
    ];
    for (const field of requiredFields) {
      if (!editableEmployee[field as keyof Employee]) {
        Alert.alert('Validation Error', `${field} is required.`);
        return;
      }
    }

    const storedEmployees = await AsyncStorage.getItem('employees');
    const employees = storedEmployees ? JSON.parse(storedEmployees) : [];

    if (editableEmployee.id) {
      const updatedEmployees = employees.map((emp: Employee) =>
        emp.id === editableEmployee.id ? editableEmployee : emp,
      );
      await AsyncStorage.setItem('employees', JSON.stringify(updatedEmployees));
    } else {
      editableEmployee.id = generateEmployeeId(); // Assign new ID
      await AsyncStorage.setItem(
        'employees',
        JSON.stringify([...employees, editableEmployee]),
      );
    }

    navigation.goBack();
  } catch (error) {
    console.error(error);
  }
};
export const generateEmployeeId = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetters = Array.from(
    {length: 2},
    () => letters[Math.floor(Math.random() * letters.length)],
  ).join('');
  const randomNumbers = String(Math.floor(1000 + Math.random() * 9000));
  return randomLetters + randomNumbers;
};
