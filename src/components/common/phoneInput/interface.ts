import {Country, CountryCode} from 'react-native-country-picker-modal';
import {TextInputBaseProps} from '../input/interface';

export interface PhoneInputProps extends TextInputBaseProps {
  countryCode: CountryCode;
  onChangeCountry: (country: Country) => void;
  onChangeText: (text: any) => void;
}
