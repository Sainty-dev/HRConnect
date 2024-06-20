import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import { BORDER_WIDTH } from '../../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
    backgroundColor: colors.COMPONENT_BACKGROUND,
  },
  textFieldLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  formLabel: {
    width: '100%',
    borderBottomWidth: BORDER_WIDTH.medium,
    borderColor: '#C4C4C4',
    color: colors.FOREGROUND_TEXT,
  },
  textFieldContainer: {
    flex: 1,
  },
});
export default styles;
