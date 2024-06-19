import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  employeeItemContainer: {
    backgroundColor: colors.COMPONENT_BACKGROUND,
    borderRadius: 10,
    marginVertical: 10,
    padding: 0,
    justifyContent: 'center',
  },
  employeeRow: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterView: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    padding: 0,
    width: 25,
    height: 25,
    borderColor: colors.BUTTON_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: colors.BUTTON_COLOR,
  },
  itemLabel: {
    color: colors.FOREGROUND_TEXT,
    fontWeight: 'bold',
  },
});
export default styles;
