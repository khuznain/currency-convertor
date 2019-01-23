import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";
import { styles } from "./index";

const InputWithButton = props => {
  const { buttonText, onPress, editable = true } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyle = [styles.container];
  if (editable === false) {
    containerStyle.push(styles.containerDisabled);
  }

  let buttonTextStyle = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyle.push({ color: props.textColor });
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};
export default InputWithButton;
