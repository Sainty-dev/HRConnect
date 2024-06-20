import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {employeeListScreen} from '../../constants/screens';
import {Employee, Skill} from '../interface';

// Add a new skill
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

// Delete a skill
export const deleteSkill = (
  index: number,
  setEditableEmployee: React.Dispatch<React.SetStateAction<Employee>>,
) => {
  setEditableEmployee(prev => ({
    ...prev,
    skills: prev.skills.filter((_, i) => i !== index),
  }));
};

// Update skill details
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

// Save employee details to storage
export const saveEmployee = async (
  editableEmployee: Employee,
  navigation: any,
) => {
  try {
    // Validate all fields
    const requiredFields = [
      'firstName',
      'lastName',
      'contactNumber',
      'dob',
      'address',
      'country',
      'postalCode',
      'email',
    ];
    if (editableEmployee === null) {
      Alert.alert('Validation Error', `All Employee details are required.`);
      return;
    }
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

    navigation.navigate(employeeListScreen);
  } catch (error) {
    console.error(error);
  }
};

// Generate a random employee ID
export const generateEmployeeId = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetters = Array.from(
    {length: 2},
    () => letters[Math.floor(Math.random() * letters.length)],
  ).join('');
  const randomNumbers = String(Math.floor(1000 + Math.random() * 9000));
  return randomLetters + randomNumbers;
};
