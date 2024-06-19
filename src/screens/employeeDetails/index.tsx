import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {Country, CountryCode} from 'react-native-country-picker-modal';

import colors from '../../constants/colors';
import {API_KEYS} from '../../constants/api';

import TextInput from '../../components/common/input';
import PhoneInput from '../../components/common/phoneInput';
import CustomDatePicker from '../../components/common/calenderPicker';
import AddressSearchInput from '../../components/common/addressInput';
import ButtonWithIcon from '../../components/common/botton/ButtonWithIcon';
import Button from '../../components/common/botton';

import {
  emailCreationRules,
  presenceRule,
} from '../../utils/validations/textInputRules';
import BaseContainer from '../../components/employee/baseContainer';
import {addSkill, deleteSkill, saveEmployee, updateSkill} from './utils';
import styles from './style';
import SkillItem from '../../components/employee/skillListItem';
import {EditEmployeeHandlerArgs, Employee} from './interface';

const EmployeeDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {employee} = route?.params || {
    id: 0,
    firstName: '',
    lastName: '',
    contactNumber: '',
    dob: '',
    skills: [],
    address: '',
    city: '',
    country: '',
    postalCode: '',
    email: '',
  };

  const [editableEmployee, setEditableEmployee] = useState<Employee>(employee);
  const [countryCode, setCountryCode] = useState<CountryCode>('ZA');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    navigation?.setOptions({
      title: employee?.id ? 'Edit Employee' : 'Add Employee',
    });
  }, [navigation, employee]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<EditEmployeeHandlerArgs>({
    mode: 'onChange',
  });

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleChangeCountry = (country: Country) => {
    setCountryCode(country.cca2);
  };

  const handleSelectAddress = (details: {
    city: string;
    country: string;
    postalCode: string;
  }) => {
    Alert.alert(
      'Selected Address',
      `City: ${details.city}\nCountry: ${details.country}\nPostal Code: ${details.postalCode}`,
    );
  };

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Text style={styles.header}>Employee Details</Text>
        <View style={styles.formItemWrapper}>
          <TextInput
            style={errors.firstName ? {borderColor: colors.ERROR_BORDER} : {}}
            control={control}
            name="firstName"
            placeholder="First Name"
            error={errors.firstName?.message}
            inputStyle={styles.formLabel}
            textContentType="name"
            onChangeText={text =>
              setEditableEmployee({...editableEmployee, firstName: text})
            }
            rules={presenceRule('First Name')}
          />
        </View>
        <View style={styles.formItemWrapper}>
          <TextInput
            style={errors.lastName ? {borderColor: colors.ERROR_BORDER} : {}}
            control={control}
            name="lastName"
            placeholder="Last Name"
            error={errors.lastName?.message}
            inputStyle={styles.formLabel}
            textContentType="name"
            onChangeText={text =>
              setEditableEmployee({...editableEmployee, lastName: text})
            }
            rules={presenceRule('Last Name')}
          />
        </View>
        <View style={styles.formItemWrapper}>
          <PhoneInput
            label=""
            countryCode={countryCode}
            onChangeCountry={handleChangeCountry}
            control={control}
            error={errors.contactNumber?.message}
            name="contactNumber"
          />
        </View>
        <View style={styles.formItemWrapper}>
          <TextInput
            style={errors.email ? {borderColor: colors.ERROR_BORDER} : {}}
            control={control}
            name="email"
            placeholder="Email"
            error={errors.email?.message}
            inputStyle={styles.formLabel}
            textContentType="emailAddress"
            rules={emailCreationRules}
            onChange={text =>
              setEditableEmployee({...editableEmployee, email: text})
            }
          />
        </View>
        <View style={styles.formItemWrapper}>
          <CustomDatePicker
            label="Choose your date"
            onChange={handleDateChange}
            initialDate={selectedDate}
          />
        </View>
        <View style={styles.formItemWrapper}>
          <AddressSearchInput
            query={{key: API_KEYS.GOOGLE_MAPS_API_KEY}}
            onSelectAddress={handleSelectAddress}
          />
        </View>
        <View style={styles.formItemWrapper}>
          <TextInput
            style={errors.postalCode ? {borderColor: colors.ERROR_BORDER} : {}}
            control={control}
            name="postalCode"
            placeholder="Postal Code"
            error={errors.postalCode?.message}
            inputStyle={styles.formLabel}
            textContentType="postalCode"
            onChange={text => console.log('Postal Code', text)}
            rules={presenceRule('Postal Code')}
          />
        </View>
        <View style={styles.formItemWrapper}>
          <TextInput
            style={errors.country ? {borderColor: colors.ERROR_BORDER} : {}}
            control={control}
            name="country"
            placeholder="Country"
            error={errors.country?.message}
            inputStyle={styles.formLabel}
            textContentType="countryName"
            onChangeText={text =>
              setEditableEmployee({...editableEmployee, country: text})
            }
            rules={presenceRule('Country')}
          />
        </View>
        <FlatList
          data={editableEmployee?.skills ?? []}
          ListEmptyComponent={() => (
            <Text style={{color: 'white'}}>No skills added</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SkillItem
              item={item}
              index={index}
              updateSkill={(index, field, value) =>
                updateSkill(
                  index,
                  field,
                  value,
                  editableEmployee,
                  setEditableEmployee,
                )
              }
              deleteSkill={index =>
                deleteSkill(index, editableEmployee, setEditableEmployee)
              }
              editableEmployee={editableEmployee}
              setEditableEmployee={setEditableEmployee}
            />
          )}
        />
        <View style={styles.formItemWrapper}>
          <Button
            label="Add New Skill"
            onClick={() => addSkill(editableEmployee, setEditableEmployee)}
          />
        </View>
        <View style={[styles.formItemWrapper, {alignItems: 'flex-end'}]}>
          <ButtonWithIcon
            label="Save changes to employee"
            buttonStyles={{width: 80}}
            onClick={() => saveEmployee(editableEmployee, navigation)}
          />
        </View>
      </View>
    </BaseContainer>
  );
};

export default EmployeeDetailsScreen;
