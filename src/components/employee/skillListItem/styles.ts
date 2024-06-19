import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    overflow: 'hidden',
    width: '25%',
    padding: 10,
    backgroundColor: colors.COMPONENT_BACKGROUND,
    marginHorizontal: 10,
  },
  skillContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
