import { StyleSheet } from 'react-native';

export default dotSize =>
  StyleSheet.create({
    dot: {
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
      marginHorizontal: 5
    },
    inactive: {
      width: dotSize / 2,
      height: dotSize / 2,
      borderRadius: dotSize / 4
    }
  });
