import {Control, ControllerProps} from 'react-hook-form';
import {StyleProp, ViewStyle} from 'react-native';

export interface TextInputBaseProps {
  control: Control;
  name: string;
  rules?: ControllerProps['rules'];
  error?: string;
  inputStyle: StyleProp<ViewStyle>;
  value?: string;
}
