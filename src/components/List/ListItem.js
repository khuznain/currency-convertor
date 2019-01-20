import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import { Icon } from "./index";

const List = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          checkmark={checkmark}
          visible={visible}
          iconBackground={iconBackground}
        />
      ) : null}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default List;
