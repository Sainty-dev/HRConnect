import {StyleSheet} from 'react-native';
import {
  BORDER_RADIUS,
  BORDER_WIDTH,
  GAP,
  PADDING,
} from '../../../constants/sizes';
import {text} from '@fortawesome/fontawesome-svg-core';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexGrow: 1,
    width: '100%',
    paddingTop: PADDING.large,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: GAP.small,
  },
  countryPickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: BORDER_WIDTH.small,
    borderRadius: BORDER_RADIUS.medium,
    paddingHorizontal: PADDING.small,
    paddingVertical: PADDING.xSmall,
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
