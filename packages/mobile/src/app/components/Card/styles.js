import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import shadowStyles from '@constants/shadows';
import { scale } from '@utils/scaling';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 10,
    padding: scale(10),
    margin: 5,
    ...shadowStyles.shadow
  }
});
