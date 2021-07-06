import { verticalScale } from '@utils/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(15)
  }
});
