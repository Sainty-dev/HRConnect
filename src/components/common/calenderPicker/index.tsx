import React, {useState} from 'react';
import {View, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import {CustomDatePickerProps} from './interface';
import {Text} from 'react-native-ui-lib';
import styles from './styles';

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  onChange,
  initialDate,
}) => {
  const [date, setDate] = useState<Date>(initialDate || new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChange(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker}>
        <Text style={styles.label}>{label || 'Select date'}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;
