import React from 'react';
import {PhoneInputProps} from './interface';
import {View} from 'react-native-ui-lib';
import styles from './style';
import {phoneNumberValidationRules} from '../../../utils/validations/textInputRules';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import {FONT_SIZE} from '../../../constants/sizes';
import colors from '../../../constants/colors';
import TextInput from '../input';

const PhoneInput = ({
  countryCode,
  onChangeCountry,
  onChangeText,
  control,
  name,
  error,
  value,
}: PhoneInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CountryPicker
          theme={{
            onBackgroundTextColor: colors.FOREGROUND_TEXT,
            backgroundColor: colors.MAIN,
            fontSize: FONT_SIZE.large,
          }}
          containerButtonStyle={[styles.countryPickerButton]}
          countryCode={countryCode}
          withCallingCode
          withCallingCodeButton
          withFilter
          preferredCountries={['ZA']}
          onSelect={(country: Country) => onChangeCountry(country)}
        />

        <View style={styles.textFieldContainer}>
          <TextInput
            style={{fontSize: FONT_SIZE.large}}
            name={name}
            error={error}
            control={control}
            inputStyle={styles.formLabel}
            keyboardType="phone-pad"
            autoComplete="tel"
            onChangeText={onChangeText}
            textContentType="telephoneNumber"
            placeholder="Phone number (optional)"
            value={value}
            rules={phoneNumberValidationRules}
          />
        </View>
      </View>
    </View>
  );
};
export default PhoneInput;
