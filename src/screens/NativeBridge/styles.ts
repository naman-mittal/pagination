import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    margin: 10,
  },
  action: {
    width: '100%',
    padding: 10,
  },
  output: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default styles;
