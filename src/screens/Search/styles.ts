import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  searchBox: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
});

export default styles;
