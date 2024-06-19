import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.COMPONENT_BACKGROUND,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
  },
  iconButtonContainer: {
    backgroundColor: colors.BUTTON_COLOR,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 130,
  },
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  label: {color: colors.FOREGROUND_TEXT, fontWeight: 'bold'},
  plusIcon: {color: colors.FOREGROUND_TEXT, marginRight: 3},
});
export default styles;
