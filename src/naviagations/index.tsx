import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EmployeeListScreen from '../screens/employeeList';
import {employeeDetailsScreen, employeeListScreen} from '../constants/screens';
import EmployeeDetailsScreen from '../screens/employeeDetails';
const Stack = createStackNavigator();

const EmployeeNavigationHandler = () => {
  return (
    <Stack.Navigator
      initialRouteName={employeeListScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={employeeListScreen} component={EmployeeListScreen} />
      <Stack.Screen
        name={employeeDetailsScreen}
        component={EmployeeDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default EmployeeNavigationHandler;
