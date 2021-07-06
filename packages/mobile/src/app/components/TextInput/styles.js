import { StyleSheet } from 'react-native';
import { doveGray, emperor, white } from '@constants/colors';
import fonts from '@config/fonts';

const SPACING = 10;

export default StyleSheet.create({
  multilineInputContainer: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING
  },
  textInput: {
    flex: 1,
    height: '100%',
    ...fonts.baseFont
  },
  focused: {
    borderColor: emperor
  },
  inputContainer: {
    backgroundColor: white,
    marginVertical: SPACING,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: doveGray,
    borderRadius: 10
  },
  multilineInput: {
    textAlignVertical: 'top'
  }
});
