import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './style';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
}

const EmployeeItem = ({
  employee,
  navigation,
}: {
  employee: Employee;
  navigation: any;
}) => (
  <TouchableOpacity
    style={styles.employeeItemContainer}
    onPress={() => navigation.navigate('EmployeeDetails', {employee})}>
    <View style={styles.employeeRow}>
      <View style={styles.counterView}>
        <Text style={styles.counterText}>{employee.id}</Text>
      </View>
      <Text style={styles.itemLabel}>{employee.firstName}</Text>
      <Text style={styles.itemLabel}> {employee.lastName}</Text>
      <Text style={styles.itemLabel}>{employee.contactNumber}</Text>
    </View>
  </TouchableOpacity>
);

export default EmployeeItem;
