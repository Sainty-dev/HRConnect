import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {BORDER_RADIUS, MARGIN} from '../../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.medium,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: colors.COMPONENT_BACKGROUND,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: MARGIN.medium,
  },
});
export default styles;
