import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.FOREGROUND_TEXT,
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    flex: 1,
    padding: 8,
    borderColor: colors.FOREGROUND_TEXT,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    color: colors.FOREGROUND_TEXT,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    padding: 8,
    borderColor: 'gray',
    backgroundColor: colors.COMPONENT_BACKGROUND,
    color: colors.FOREGROUND_TEXT,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  filterButtonContainer: {
    marginRight: 10,
  },
});

export default styles;
