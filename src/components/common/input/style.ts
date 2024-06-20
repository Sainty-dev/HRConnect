import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {BORDER_RADIUS, BORDER_WIDTH} from '../../../constants/sizes';

const styles = StyleSheet.create({
  errorView: {
    width: '70%',
    height: 'auto',
    backgroundColor: colors.ERROR,
    marginTop: '2%',
    borderColor: colors.ERROR_BORDER,
    padding: '1%',
    borderWidth: BORDER_WIDTH.large,
    borderRadius: BORDER_RADIUS.medium,
  },
  animatedView: {
    marginLeft: '5%',
  },
  container: {
    width: '100%',
  },
  textFieldContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: colors.COMPONENT_BACKGROUND,
  },
  textField: {
    padding: 10,
    color: colors.FOREGROUND_TEXT,
  },
  textFieldLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 5},
  column: {flexDirection: 'column', width: '100%'},
});

export default styles;
