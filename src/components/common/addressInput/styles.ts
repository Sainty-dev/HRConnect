import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

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
});
export default styles;
