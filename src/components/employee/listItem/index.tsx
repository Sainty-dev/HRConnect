import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './style';
import EmployeeDetailsScreen from '../../../screens/employeeDetails';

interface Employee {
  id: number;

  firstName: string;
  lastName: string;
  contactNumber: string;
}

const EmployeeItem = ({
  itemNumber,
  employee,
  navigation,
}: {
  employee: Employee;
  navigation: any;
  itemNumber: number;
}) => (
  <TouchableOpacity
    style={styles.employeeItemContainer}
    onPress={() => navigation.navigate(EmployeeDetailsScreen, {employee})}>
    <View style={styles.employeeRow}>
      <View style={styles.counterView}>
        <Text style={styles.counterText}>{itemNumber}</Text>
      </View>
      <Text style={styles.itemLabel}>{employee.firstName}</Text>
      <Text style={styles.itemLabel}> {employee.lastName}</Text>
      <Text style={styles.itemLabel}>{employee.contactNumber}</Text>
    </View>
  </TouchableOpacity>
);

export default EmployeeItem;
