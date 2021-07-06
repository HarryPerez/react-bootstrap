import { isIos } from '@constants/platform';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  arrow: {
    marginLeft: isIos ? 20 : 5
  },
  inputContainer: {
    height: isIos ? 40 : 43
  },
  cardExample: { width: '75%', padding: 20, marginBottom: 20 }
});
