import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Container = ({ children, backgroundColor }) => {
  let containerStyle = [styles.container];
  if (backgroundColor) {
    containerStyle.push({ backgroundColor });
  }
  return <View style={containerStyle}>{children}</View>;
};
export default Container;
