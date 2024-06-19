import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheck,
  faFilter,
  faUserPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import BaseContainer from '../../components/employee/baseContainer';
import {ICON_SIZE} from '../../constants/sizes';
import Placeholder from '../../components/employee/placeholder';
import EmployeeItem from '../../components/employee/listItem';
import colors from '../../constants/colors';
import styles from './styles';
import {filterEmployees, loadEmployeesFromStorage} from './utils';
import Employee from './interface';
import CustomDatePicker from '../../components/common/calenderPicker';
import {employeeDetailsScreen} from '../../constants/screens';

const EmployeeListScreen = ({navigation}: {navigation: any}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterSkill, setFilterSkill] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const loadEmployees = async () => {
      const loadedEmployees = await loadEmployeesFromStorage();
      setEmployees(loadedEmployees);
    };
    loadEmployees();
  }, []);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setFilterYear(date.getFullYear().toString());
  };

  const handleAddEmployee = () => {
    navigation.navigate(employeeDetailsScreen, {employee: null});
  };

  const filteredEmployees = filterEmployees(
    employees,
    searchQuery,
    filterYear,
    filterSkill,
  );

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Text style={styles.header}>Employees</Text>
        <Text style={[styles.header, {fontSize: 11}]}>
          There are {employees.length} employees
        </Text>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor={colors.FOREGROUND_TEXT}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.filterButtonContainer}
            onPress={() => setModalVisible(true)}>
            <FontAwesomeIcon
              icon={faFilter}
              size={ICON_SIZE.small}
              color={colors.ICON}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddEmployee}>
            <FontAwesomeIcon
              icon={faUserPlus}
              size={ICON_SIZE.small}
              color={colors.ICON}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredEmployees}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <EmployeeItem employee={item} navigation={navigation} />
          )}
          ListEmptyComponent={<Placeholder />}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={{width: '100%'}}>
                <CustomDatePicker
                  label="Filter by year (date of birth)"
                  onChange={handleDateChange}
                  initialDate={new Date()}
                />
              </View>
              <TextInput
                style={styles.modalInput}
                placeholder="Filter by skills"
                value={filterSkill}
                placeholderTextColor={colors.FOREGROUND_TEXT}
                onChangeText={setFilterSkill}
              />
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size={ICON_SIZE.medium}
                    color="green"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFilterSkill('');
                    setModalVisible(false);
                    setFilterYear('');
                  }}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={ICON_SIZE.medium}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </BaseContainer>
  );
};

export default EmployeeListScreen;
