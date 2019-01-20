import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Icon = ({ checkmark, visible, iconBackground }) => {
  const iconStyle = [styles.icon];
  if (visible) {
    iconStyle.push(styles.iconVisble);
  }

  if (iconBackground) {
    iconStyle.push({ backgroundColor: iconBackground });
  }
  return (
    <View style={iconStyle}>
      {checkmark ? (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require("./images/check.png")}
        />
      ) : null}
    </View>
  );
};
export default Icon;
