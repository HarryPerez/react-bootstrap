import React, { useState } from 'react';
import { View, TextInput as RNTextInput, ViewPropTypes } from 'react-native';
import Text from '@components/Text';
import Icon from '@components/Icon';
import Row from '@components/Row';
import { bool, func, number, string } from 'prop-types';
import configStyles from '@config/styles';

import styles from './styles';

function TextInput({
  title,
  onChange,
  error,
  placeholder,
  placeholderTextColor,
  multiline,
  icon,
  iconSize,
  containerStyle,
  maxLength,
  editable = true,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={containerStyle}>
      <Row>
        {!!icon && <Icon source={icon} size={iconSize} />}
        {!!title && <Text small>{title}</Text>}
      </Row>
      <View
        style={[
          configStyles.inputContainer,
          styles.inputContainer,
          multiline && styles.multilineInputContainer,
          isFocused && styles.focused
        ]}>
        <RNTextInput
          {...props}
          multiline={multiline}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[styles.textInput, multiline && styles.multilineInput]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChange}
          editable={editable}
        />
      </View>
      {!!error && (
        <Text small carnation>
          {error}
        </Text>
      )}
    </View>
  );
}

TextInput.propTypes = {
  title: string,
  onChange: func,
  error: string,
  placeholder: string,
  placeholderTextColor: string,
  multiline: bool,
  icon: number,
  iconSize: number,
  containerStyle: ViewPropTypes.style,
  maxLength: number,
  editable: bool
};

export default TextInput;
