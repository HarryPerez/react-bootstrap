import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '@utils/scaling';
import { IS_SMALL_DEVICE } from '@constants/platform';

export const IMAGE_WIDTH = scale(225);

export const IMAGE_HEIGHT = verticalScale(200);

export const CAROUSEL_HEIGHT = IS_SMALL_DEVICE ? verticalScale(400) : verticalScale(365);

export default StyleSheet.create({
  carouselInnerContainer: {
    maxHeight: CAROUSEL_HEIGHT,
    height: '75%'
  },
  card: {
    paddingBottom: 0
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    resizeMode: 'contain'
  }
});
