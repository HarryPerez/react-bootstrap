import { StyleSheet } from 'react-native';
import { black } from '@constants/colors';

export default StyleSheet.create({
  shadow: {
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  }
});
