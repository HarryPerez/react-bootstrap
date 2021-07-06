import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '@utils/scaling';
import { purple, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    height: verticalScale(120),
    width: scale(300),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  title: {
    marginTop: 40
  },
  upperButton: {
    marginBottom: 10,
    backgroundColor: purple,
    borderRadius: 10,
    width: 80
  },
  buttonText: {
    color: white
  }
});
