import {TextFieldProps, PickerProps} from 'react-native-ui-lib';
import {TextInputBaseProps} from '../components/common/input/interface';
import {ItemPickerBaseProps} from '../components/common/picker/interface';
export type TextInputProps = TextInputBaseProps & TextFieldProps;
export type ItemPickerProps = PickerProps & ItemPickerBaseProps;
