import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import TextInput from './src/components/common/input';
import {BORDER_WIDTH} from './src/constants/sizes';
import {emailCreationRules} from './src/utils/validations/textInputRules';
import colors from './src/constants/colors';
import {DateTimePicker, NumberInput, Picker} from 'react-native-ui-lib';
import ItemPicker from './src/components/common/picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import Button from './src/components/common/botton';

import ButtonWithIcon from './src/components/common/botton/ButtonWithIcon';
import {Country, CountryCode} from 'react-native-country-picker-modal';
import PhoneInput from './src/components/common/phoneInput';
import CalenderPicker from './src/components/common/calenderPicker';
import CustomDatePicker from './src/components/common/calenderPicker';
import AddressSearchInput from './src/components/common/addressInput';
import {API_KEYS} from './src/constants/api';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [language, setLanguage] = React.useState('');
  const [countryCode, setCountryCode] = React.useState<CountryCode>('ZA');
  const longOptions = [
    {label: 'JavaScript', value: 'js'},
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
    {label: 'C#', value: 'csharp'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Swift', value: 'swift'},
    {label: 'Go', value: 'go'},
    {label: 'Objective-C', value: 'objc'},
    {label: 'TypeScript', value: 'ts'},
    {label: 'C++', value: 'cpp'},
    {label: 'PHP', value: 'php'},
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Rust', value: 'rust'},
    {label: 'R', value: 'r'},
    {label: 'Scala', value: 'scala'},
    {label: 'Perl', value: 'perl'},
    {label: 'Lua', value: 'lua'},
    {label: 'Haskell', value: 'haskell'},
    {label: 'Matlab', value: 'matlab'},
    {label: 'Shell', value: 'shell'},
    {label: 'Pascal', value: 'pascal'},
    {label: 'Julia', value: 'julia'},
    {label: 'Elixir', value: 'elixir'},
    {label: 'Clojure', value: 'clojure'},
    {label: 'Groovy', value: 'groovy'},
    {label: 'Assembly', value: 'assembly'},
    {label: 'VHDL', value: 'vhdl'},
    {label: 'Dart', value: 'dart'},
    {label: 'PowerShell', value: 'powershell'},
    {label: 'Objective-C++', value: 'objcpp'},
    {label: 'Visual Basic', value: 'vb'},
    {label: 'Ada', value: 'ada'},
    {label: 'Abap', value: 'abap'},
    {label: 'Apex', value: 'apex'},
    {label: 'Arduino', value: 'arduino'},
    {label: 'C', value: 'c'},
    {label: 'COBOL', value: 'cobol'},
  ];
  const handleChangeCountry = (country: Country) => {
    setCountryCode(country.cca2);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  interface SignInHandlerArgs {
    email: string;
    password: string;
    phoneNumber: string;
  }
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInHandlerArgs>({
    mode: 'onChange',
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: colors.MAIN,
            padding: 55,
          }}>
          <AddressSearchInput
            query={{key: API_KEYS.GOOGLE_MAPS_API_KEY}}
            onSelectAddress={handleSelectAddress}
          />
          <CustomDatePicker
            label="Choose your date"
            onChange={handleDateChange}
            initialDate={new Date()}
          />
          <TextInput
            style={errors.email ? {borderColor: Colors.errorBorder} : {}}
            control={control}
            name="email"
            placeholder={'Email'}
            error={errors.email?.message}
            inputStyle={styles.formLabel}
            textContentType="emailAddress"
            rules={emailCreationRules}
          />
          <ItemPicker
            placeholder="Select skill"
            color={colors.FOREGROUND_TEXT}
            floatingPlaceholder
            value={language}
            enableModalBlur={false}
            onChange={item => setLanguage(item)}
            topBarProps={{title: 'Languages'}}
            searchPlaceholder={'Search a language'}
            searchStyle={{
              color: Colors.blue30,
              placeholderTextColor: Colors.grey50,
            }}
            items={longOptions}
          />
          <Button
            label="Submit"
            onClick={handleSubmit(data => console.log('sss'))}
          />

          <ButtonWithIcon
            label="Submit"
            buttonStyles={{width: 50}}
            onClick={() => console.log('ss')}
          />
          <PhoneInput
            label=""
            countryCode={countryCode}
            onChangeCountry={handleChangeCountry}
            control={control}
            error={errors.phoneNumber?.message}
            name="phoneNumber"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  formLabel: {
    width: '100%',
    borderBottomWidth: BORDER_WIDTH.medium,
    borderColor: '#C4C4C4',
    color: Colors.foregroundText,
  },
});

export default App;
