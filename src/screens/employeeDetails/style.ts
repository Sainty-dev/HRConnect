import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {BORDER_WIDTH} from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
  textFieldContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: colors.COMPONENT_BACKGROUND,
  },
  formLabel: {
    width: '100%',
    borderBottomWidth: BORDER_WIDTH.medium,
    borderColor: '#C4C4C4',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.FOREGROUND_TEXT,
    marginBottom: 10,
  },
  formItemWrapper: {
    marginVertical: 10,
    width: '90%',
  },
});

export default styles;
