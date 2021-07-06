import { StyleSheet } from 'react-native';
import { scale } from '@utils/scaling';
import { blackSqueeze } from '@constants/colors';

export const BORDER_RADIUS = scale(60);

export default StyleSheet.create({
  container: {
    width: scale(70),
    height: scale(8),
    backgroundColor: blackSqueeze,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstProgress: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS
  },
  lastProgress: {
    borderBottomRightRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  }
});
