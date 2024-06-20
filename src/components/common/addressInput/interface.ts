import {Control, ControllerProps} from 'react-hook-form';

export interface AddressDetails {
  city: string;
  country: string;
  postalCode: string;
}

export interface AddressSearchInputProps {
  apiKey: string;
  onSelectAddress: (details: AddressDetails) => void;
  control: Control;
  name: string;
  rules?: ControllerProps['rules'];
  error?: string;
  onChangeText: (text: string) => void;
}
